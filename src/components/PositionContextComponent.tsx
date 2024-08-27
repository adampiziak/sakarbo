import { BsGear, BsGearFill } from "solid-icons/bs";
import {
  createEffect,
  createSignal,
  For,
  JSX,
  onMount,
  ParentComponent,
  Show,
} from "solid-js";
import { Component } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { Game } from "~/Game";
import { startingFen } from "~/utils";
import EngineCard from "./EngineCard";
import GameInterfaceCard from "./GameInterfaceCard";

const PositionContext: Component<{ game: Game }> = (props) => {
  const [fen, setFen] = createSignal(startingFen());
  const [rep, setRep] = createSignal<any>(null);
  const context = useSaknotoContext();
  const [currentView, setCurrentView] = createSignal<
    "position" | "engine" | "settings"
  >("position");

  props.game.subscribe(({ fen }) => {
    setFen(fen);
  });

  createEffect(() => {
    // on fen

    context.repertoire.getLine(fen()).then((val) => {
      if (val?.response) {
        setRep(val?.response);
      } else {
        setRep([]);
      }
    });
  });

  const tabs = ["position", "engine", "explorer", "settings"];

  const tab = (name: string) => {
    return (
      <div class="flex items-center justify-center gap-2 px-3 py-1.5 active:bg-lum-300 bg-lum-200 text-lum-600 rounded-lg">
        <BsGearFill size={16} />
        <div>{name}</div>
      </div>
    );
  };

  const ViewAction: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
    props,
  ) => {
    return (
      <div class="bg-lum-200 p-2 rounded active:bg-lum-300" {...props}>
        {props.children}
      </div>
    );
  };

  const response = (move: string) => {
    return (
      <div
        class="p-2 bg-lum-200 rounded-lg font-bold text-lum-700"
        onclick={() => props.game.play_move(move)}
      >
        <div>{move}</div>
      </div>
    );
  };

  return (
    <div class="flex flex-col bg-lum-100 text-lum-900 grow px-4">
      <div class="flex py-1 gap-5 mb-2 justify-start w-screen overflow-auto">
        <ViewAction onclick={() => setCurrentView("position")}>
          position
        </ViewAction>
        <ViewAction onclick={() => setCurrentView("engine")}>engine</ViewAction>
        <ViewAction onclick={() => setCurrentView("settings")}>
          settings
        </ViewAction>
      </div>
      <Show when={currentView() === "position"}>
        <div class="">
          <div class="text-lum-700 font-semibold mb-1">repertoire</div>
          <div>
            <For each={rep()}>{(it, _) => response(it)}</For>
          </div>
        </div>
      </Show>
      <Show when={currentView() === "engine"}>
        <EngineCard game={props.game} />
      </Show>
      <Show when={currentView() === "settings"}>
        <GameInterfaceCard game={props.game} />
      </Show>
    </div>
  );
};

export default PositionContext;