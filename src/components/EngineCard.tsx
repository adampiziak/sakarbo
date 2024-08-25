import { Component, For, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { Evaluation, EvaluationLine } from "~/Engine";
import { STARTING_EVAL } from "~/constants";
import { DraggableIcon } from "~/icons";

const EngineCard: Component<{
  onSelect?: (dest: string) => any;
  onHover?: (moves: string[]) => any;
}> = (props) => {
  const context = useSaknotoContext();

  const [evaluation, setEvaluation] = createSignal<Evaluation>({
    ...STARTING_EVAL,
  });

  onMount(() => {
    context.engine.subscribe_main((newEval) => {
      setEvaluation(newEval);
    });
  });

  const emitSelection = (dest: string) => {
    if (props.onSelect) {
      props.onSelect(dest);
    }
  };

  let arrows = new Set<string>();

  const addArrow = (move: string) => {
    arrows.add(move);
    emitHover([...arrows.values()]);
  };
  const removeArrow = (move: string) => {
    arrows.delete(move);
    emitHover([...arrows.values()]);
  };

  const emitHover = (moves: string[]) => {
    if (props.onHover) {
      props.onHover(moves);
    }
  };

  const Line = (line: EvaluationLine) => {
    const score = line.score;
    let sign = "   ";
    if (score !== 0) {
      sign = score > 0 ? "+" : "-";
    }

    const Move = (move: string, num: number) => {
      let move_num = "";
      if (num % 2 == 0) {
        move_num = `${Math.floor(num / 2) + 1}.`;
        return <div class="text-nowrap">{`${move_num}${move}`}</div>;
      } else {
        return <div class="mr-1 text-nowrap">{`${move}`}</div>;
      }
    };

    const score_string = `${sign}${Math.abs(score)}`;
    return (
      <div
        class="hover:bg-lum-300 hover:cursor-pointer bg-lum-100 [&:not(:last-child)]:border-b border-lum-200 dark:border-lum-200 py-2 px-2 flex gap-4"
        onClick={() => emitSelection(line.san[0])}
        onmouseenter={() => {
          addArrow(line.lan[0]);
        }}
        onmouseleave={() => {
          removeArrow(line.lan[0]);
        }}
      >
        <div class="w-[32px] grow-0 shrink-0  font-semibold text-right">
          {score_string}
        </div>
        <div class="flex flex-shrink justify-start gap-1 overflow-hidden">
          <For each={line.san}>{(item, index) => Move(item, index())}</For>
        </div>
      </div>
    );
  };

  return (
    <div class="border border-accent-200 dark:border-accent-700 bg-lum-100 rounded overflow-hidden">
      <div class="card-header text-lum-900 bg-lum-200 flex justify-between items-center">
        <div class="mr-2 ">Engine</div>
        <div class="font-normal ">{evaluation().mode}</div>
        <div class="text-xs uppercase ml-2 grow dark:text-accent-500 text-accent-700 text-right mr-2">
          {evaluation().cached ? "cached" : ""}
        </div>
        <div class="text-lum-800  text-right">
          <span class=""></span>
          <span class=""> {evaluation().depth}</span>
        </div>
      </div>
      <div class="text-lum-700 bg-lum-100">
        <For each={evaluation().lines}>{(item, _) => Line(item)}</For>
      </div>
    </div>
  );
};

export default EngineCard;
