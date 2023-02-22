import type {
  QwikMouseEvent} from "@builder.io/qwik";
import {
  component$,
  useClientEffect$,
  useRef,
  useStore,
} from "@builder.io/qwik";
import { useApp } from "~/contexts/AppProvider";
import { Controls } from "./Controls";

export interface PlayerProps {}

export function onContextMenuHandler(
  e: QwikMouseEvent<HTMLVideoElement, MouseEvent>,
  el?: any
) {
  // console.log(e.);
  console.log(el);
}
export const Player = component$<PlayerProps>(() => {
  const { isDark, playerState } = useApp();
  const vidEl = useRef<HTMLVideoElement>();
  const playerData = useStore({
    name: "Manu",
    address: {
      address: "",
      city: "",
    },
    orgs: [],
  });

  useClientEffect$(() => {
    playerData.name = "Menu";
    return () => {
      vidEl.current?.pause();
    };
  });

  useClientEffect$(({ track }) => {
    const name = track(() => playerData.name);
    console.log(name);
  });

  return (
    <div
      class={`w-full flex gap-2 ${
        isDark ? "text-white" : "text-black"
      } relative player`}
    >
      <div class=" bg-blackGray flex flex-col relative rounded-lg overflow-hidden aspect-video w-full">
        <video
          ref={vidEl}
          onTimeUpdate$={(e, el: HTMLVideoElement) => {
            playerState.progress = el.currentTime;
            // console.log(el.currentTime, playerState.progress);
          }}
          class="w-full h-full object-contain"
          autoPlay
          controls
          id="video"
          muted
          poster="/arg.jpg"
          onContextMenu$={(e, el) => onContextMenuHandler(e, el)}
        >
          <source src="/billie.mp4" />
        </video>
      </div>
      <Controls vidEl={vidEl.current as HTMLVideoElement} />
    </div>
  );
});
