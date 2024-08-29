import type StockfishWeb from "lila-stockfish-web";
// import Stockfish from "./sf161-70";
import Stockfish from "./sf16-7";
import {
  startingFen,
  parse_moves,
  debounce,
  debounce_instant,
  throttle,
} from "./utils";
import { parse_info } from "./uci";
import { STARTING_EVAL, STARTING_FEN } from "./constants";
import { LRUCache } from "./data/Cache";
import { DEV } from "solid-js";

export interface Evaluation {
  fen: string;
  depth: number;
  mode: "cloud" | "local";
  cached: boolean;
  lines: EvaluationLine[];
}

export interface EvaluationLine {
  score: number;
  san: string[];
  lan: string[];
}

interface Task {
  mode: "main" | "other";
  fen: string;
  eval_type: "any" | "local";
}

export function createEmptyEvaluation(): Evaluation {
  return {
    fen: startingFen(),
    depth: 0,
    mode: "local",
    cached: false,
    lines: [],
  };
}

const EVAL_DEPTH = 24;

export class Engine {
  subscribers = new Map<string, any[]>();
  engine: StockfishWeb | undefined;
  last_cloud_request = new Date(0);
  uci_ready = false;

  engine_ready = true;
  current_task: Task | null = null;
  current_evaluation: Evaluation = createEmptyEvaluation();
  other_queue: Task[] = [];
  board_queue: Task[] = [];
  initialize_wait_queue: any[] = [];
  cache?: LRUCache<Evaluation>;
  current_position = startingFen();

  private sharedWasmMemory = (lo: number, hi = 32767): WebAssembly.Memory => {
    let shrink = 4; // 32767 -> 24576 -> 16384 -> 12288 -> 8192 -> 6144 -> etc
    while (true) {
      try {
        return new WebAssembly.Memory({
          shared: true,
          initial: lo,
          maximum: hi,
        });
      } catch (e) {
        if (hi <= lo || !(e instanceof RangeError)) throw e;
        hi = Math.max(lo, Math.ceil(hi - hi / shrink));
        shrink = shrink === 4 ? 3 : 4;
      }
    }
  };
  async start() {
    console.log("LOADING ENGINE");
    const sf = await Stockfish({
      wasmMemmory: this.sharedWasmMemory(4096!),
      locateFile: (name: string) => `/${name}`,
    });

    const nnue_paths = new Set([]);
    for (let i = 0; i < 20; i++) {
      const nnue_path = sf.getRecommendedNnue(i);

      if (nnue_paths.has(nnue_path)) {
        break;
      }
      nnue_paths.add(nnue_path);

      const response = await fetch(`/${nnue_path}`);
      const buffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      try {
        await sf.setNnueBuffer(uint8Array, i);
      } catch (e) {
        console.error(nnue_path);
        console.error(e);
      }
    }

    this.engine = sf;

    try {
      if (this.engine) {
        this.engine.listen = (event: any) => {
          this.handle_message(event);
        };

        this.engine.onError = (e: any) => {
          console.error(e);
        };
        this.engine.uci("uci");
      } else {
        console.error("ENGINE UNDEFINED");
      }
    } catch (e) {
      console.error(e);
    }

    // Cache
    console.log("ENGINE READY");
    this.cache = new LRUCache<Evaluation>("engine-cache");
    await this.cache.load();
  }

  wait() {
    return new Promise<void>((resolve, _reject) => {
      if (this.uci_ready) {
        resolve();
      } else {
        this.initialize_wait_queue.push(resolve);
      }
    });
  }

  async evaluate_next_task() {
    // console.error("STARTING NEXT TASK");
    this.current_evaluation = createEmptyEvaluation();
    let task = this.board_queue.pop();
    this.board_queue = [];

    if (!task) {
      task = this.other_queue.pop();
    }
    this.current_task = task ?? null;

    if (task) {
      this.current_task = task;
      this.engine_ready = false;
      this.current_evaluation.fen = this.current_task.fen;
      this.evaluate(task);
    }
  }

  async clear_cache() {
    this.cache?.clear();
  }

  async handle_message(message: string) {
    // console.log(message);
    if (message.includes("ponder") || message.includes("bestmove")) {
      if (this.current_task?.mode === "other") {
        this.emit({ ...this.current_evaluation });
      }
      if (this.current_task) {
        this.cache?.add(this.current_evaluation.fen, {
          ...this.current_evaluation,
          cached: true,
        });
      }
      this.current_task = null;
      this.engine_ready = true;
      this.engine?.uci("isready");
      return;
    }
    if (message.includes("readyok")) {
      await this.evaluate_next_task();
      return;
    }
    if (message.includes("uciok")) {
      this.engine?.uci("setoption name Threads value 16");
      this.engine?.uci("setoption name Hash value 1536");
      this.engine?.uci("setoption name MultiPV value 3");

      this.engine?.uci("ucinewgame");

      for (const resolver of this.initialize_wait_queue) {
        resolver();
      }
      console.log("ASDDDDDDDDDDDDDDDDD");
      this.uci_ready = true;
      console.log(this.uci_ready);
      this.engine?.uci("isready");
      // console.error("READY");
      return;
    }

    const info = parse_info(message);
    if (info) {
      this.current_evaluation.depth = Math.max(
        this.current_evaluation.depth,
        info.depth,
      );
      this.current_evaluation.mode = "local";
      console.log(this.current_evaluation.depth);
      const line = parse_moves(this.current_evaluation.fen, info.line);
      this.current_evaluation.lines[info.multipv - 1] = {
        score: Math.round(info.cp / 10) / 10,
        san: line,
        lan: info.line,
      };

      if (this.current_task?.mode === "main") {
        this.emit_mainline({ ...this.current_evaluation });
      }
    }
  }

  emit_mainline = throttle((evaluation: Evaluation) => {
    const listeners = this.subscribers.get("main");
    if (!listeners) {
      return;
    }
    for (const callback of listeners) {
      callback(evaluation);
    }
  }, 300);

  emit(evaluation: Evaluation) {
    const listeners = this.subscribers.get(evaluation.fen);

    if (!listeners) {
      return;
    }

    for (const callback of listeners) {
      callback(evaluation);
    }
  }

  enqueue_other = debounce((fen: string) => {
    this.prepare_task({ mode: "other", fen, eval_type: "any" });
  }, 50);

  prepare_task(task: Task) {
    console.log(task);
    if (task.mode === "main") {
      this.board_queue.push(task);
    } else {
      this.other_queue.push(task);
    }

    if (!this.uci_ready) {
      console.log("NOT READY");
      return;
    }

    if (this.engine_ready) {
      this.engine?.uci("isready");
      return;
    }

    if (this.current_task?.mode === "main") {
      this.engine?.uci("stop");
      console.log("STOPPING");
    }
  }

  enqueue_main = debounce_instant((fen: string) => {
    if (fen === STARTING_FEN) {
      this.emit_mainline(STARTING_EVAL);
    } else {
      this.prepare_task({ mode: "main", fen, eval_type: "any" });
    }
  }, 1000);

  subscribe_main(callback: (arg0: Evaluation) => void) {
    const existing = this.subscribers.get("main") ?? [];
    existing.push(callback);
    this.subscribers.set("main", existing);
  }

  subscribe_position(fen: string, callback: (arg0: Evaluation) => void) {
    const existing = this.subscribers.get(fen) ?? [];
    existing.push(callback);
    this.subscribers.set(fen, existing);
  }

  wait_for(fen: string): Promise<Evaluation> {
    return new Promise((resolve, reject) => {
      this.subscribe_position(fen, (evaluation: Evaluation) => {
        resolve(evaluation);
      });

      this.enqueue_other(fen);
    });
  }

  async evaluate(task: Task) {
    const cached_eval = await this.cache?.get(task.fen);
    if (cached_eval && cached_eval.depth >= EVAL_DEPTH) {
      console.log(cached_eval);
      if (task.mode === "main") {
        this.emit_mainline(cached_eval);
      } else {
        this.emit(cached_eval);
      }
      this.current_task = null;
      this.engine_ready = true;
      return;
    }

    if (task.eval_type === "any") {
      const cloud_eval = await this.cloud_evaluation(task);
      if (cloud_eval) {
        this.cache?.add(cloud_eval.fen, { ...cloud_eval, cached: true });
        if (task.mode === "main") {
          this.emit_mainline(cloud_eval);
        } else {
          this.emit(cloud_eval);
        }
        if (cloud_eval.depth >= EVAL_DEPTH) {
          return;
        }
      }
    }

    this.start_local_evaluation(task);
  }

  start_local_evaluation(task: Task) {
    console.log("LOCAL EVAL" + task.fen);
    this.engine?.uci(`position fen ${task.fen}`);
    this.engine?.uci(`go depth ${EVAL_DEPTH}`);
  }

  async cloud_evaluation(task: Task) {
    let query = `https://lichess.org/api/cloud-eval?fen=${encodeURIComponent(task.fen)}&multiPv=3`;

    const elapsed_time = Date.now() - this.last_cloud_request.getTime();

    if (elapsed_time < 500) {
      return null;
    }

    const response = await fetch(query);
    const json = await response.json();

    if (!json?.pvs) {
      return null;
    }

    let evaluation = createEmptyEvaluation();
    evaluation.depth = json.depth ?? 0;
    evaluation.fen = json.fen;
    evaluation.mode = "cloud";

    for (const line of json.pvs.slice(0, 3)) {
      let moves = line.moves.split(" ");
      evaluation.lines.push({
        score: Math.round(line.cp / 10) / 10,
        lan: moves,
        san: parse_moves(evaluation.fen, moves),
      });
    }

    this.current_task = null;
    this.engine_ready = true;

    return evaluation;
  }
}
