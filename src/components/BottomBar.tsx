import { CustomIcon } from "solid-icons";
import {
  FaSolidAnglesUp,
  FaSolidArrowLeft,
  FaSolidArrowRotateLeft,
  FaSolidBars,
  FaSolidChevronLeft,
  FaSolidChevronRight,
  FaSolidPlus,
  FaSolidXmark,
} from "solid-icons/fa";
import { HiOutlineBars2 } from "solid-icons/hi";
import { Component, createSignal, ParentComponent, Show } from "solid-js";
import { useBottomBar, useUserInterface } from "~/Context";
import { useGame } from "~/GameProvider";

const iconSize = 16;
const BottomBar: Component = () => {
  const ui = useUserInterface();
  const game = useGame();
  const [open, setOpen] = createSignal(false);
  ui.mobilenav.on(({ active }) => {
    setOpen(active);
  });

  const ActionButton: ParentComponent<{ onclick: any }> = (props) => {
    return (
      <div
        class="h-full w-12  rounded-full flex items-center justify-center active:bg-lum-200 border-lum-200 "
        onclick={props.onclick}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div
      id="bottom-bar-content"
      class={`w-screen h-14 flex bg-lum-50 items-center *:h-full text-lum-800 shrink-0`}
    ></div>
  );
};

export default BottomBar;
// <div class={`bottom-actions  shrink ${open() ? "nav-mode" : "flex"}`}>
//   <div
//     class={`text-lum-700 font-medium bg-lum-100 h-10 flex rounded-full  items-center grow justify-start gap-1`}
//   >
//     <ActionButton onclick={() => game.undoMove()}>
//       <FaSolidChevronLeft size={iconSize} />
//     </ActionButton>
//     <ActionButton onclick={() => game.redoMove()}>
//       <FaSolidChevronRight size={iconSize} />
//     </ActionButton>
//     <ActionButton onclick={() => game.restartSlow()}>
//       <FaSolidArrowRotateLeft size={iconSize} />
//     </ActionButton>
//     <ActionButton onclick={() => game.toggleRepertoireMode()}>
//       <FaSolidPlus size={iconSize} />
//     </ActionButton>
//     <ActionButton>
//       <FaSolidAnglesUp size={iconSize} />
//     </ActionButton>
//   </div>
// </div>
// <div
//   class={`shrink min-w-0 justify-center flex h-10 rounded-full text-lum-700 ${open() ? "bg-lum-200 grow" : "w-10"}`}
//   onClick={() => ui.mobilenav.toggle()}
// >
//   <Show
//     when={open()}
//     fallback={
//       <div class="bar2 flex flex-col justify-center h-full overflow-hidden">
//         <div class="bar"></div>
//         <div class="bar"></div>
//       </div>
//     }
//   >
//     <div class="h-full flex items-center gap-4 font-semibold justify-center">
//       <FaSolidArrowLeft />
//     </div>
//   </Show>
// </div>
