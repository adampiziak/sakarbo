import type StockfishWeb from "lila-stockfish-web";
import Stockfish from "./sf161-70";
import { parse_moves } from "./utils";

export class Engine {
  subscribers = new Map<string, any[]>();
  engine: StockfishWeb | undefined;
  queue: string[] = [];
  current_position: string | null = null;
  last_cloud_request = new Date(0);
  main_position = "";
  initialize_wait_queue: any[] = [];

  async start() {
    const sf = await Stockfish({});
    this.engine = sf;

    try {
      if (this.engine) {
        this.engine.listen = (event: any) => {
          this.handle_message(event);
        };
        this.engine.uci("uci");

        this.engine.uci("setoption name Threads value 8");
        this.engine.uci("setoption name Hash value 128");
        this.engine.uci("setoption name MultiPV value 3");
        this.engine.uci("setoption name UCI_ShowWDL value true");

        this.engine.uci("ucinewgame");
        this.engine.uci("isready");

        for (const resolver of this.initialize_wait_queue) {
          resolver();
        }
      } else {
        console.error("ENGINE UNDEFINED");
      }
    } catch (e) {
      console.error(e);
    }
  }

  wait() {
    return new Promise<void>((resolve, _reject) => {
      if (this.engine) {
        resolve();
      } else {
        this.initialize_wait_queue.push(resolve);
      }
    });
  }

  async handle_message(message: string) {
    if (message.includes("readyok")) {
      const task = this.queue.pop();
      if (task) {
        this.evaluate_position(task);
      }
    }
  }

  emit(fen: string, evaluation: any) {
    const listeners = this.subscribers.get("main");
    for (const i in evaluation.pvs) {
      evaluation.pvs[i].moves = parse_moves(
        this.main_position,
        evaluation.pvs[i].moves.split(" "),
      ).join(" ");
    }

    for (const sub of listeners) {
      sub(evaluation);
    }
  }

  add_task(fen: string) {
    console.log("NEW TASK");
    console.log(fen);
    this.queue.push(fen);
    this.main_position = fen;
    this.engine.uci("isready");
  }

  subscribe_main(callback: () => void) {
    const existing = this.subscribers.get("main") ?? [];
    existing.push(callback);
    this.subscribers.set("main", existing);
  }

  subscribe_position(fen: string, callback: () => void) {
    const existing = this.subscribers.get(fen) ?? [];
    existing.push(callback);
    this.subscribers.set(fen, existing);
    this.add_task(fen);
  }

  evaluate_position(fen: string) {
    this.current_position = fen;
    this.cloud_evaluation(fen);
  }

  async cloud_evaluation(fen: string) {
    let query = `https://lichess.org/api/cloud-eval?fen=${encodeURIComponent(fen)}&multiPv=3`;

    const elapsed_time = Date.now() - this.last_cloud_request;

    if (elapsed_time < 500) {
      return;
    }

    const response = await fetch(query);
    const json = await response.json();

    if (json) {
      this.emit(fen, json);
    }
  }
}
