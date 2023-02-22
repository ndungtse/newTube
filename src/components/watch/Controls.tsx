import { $, component$ } from "@builder.io/qwik";
import { useApp } from "~/contexts/AppProvider";
import {
  CogIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
} from "~/integrations/react/icons";
import { MUISlider } from "~/integrations/react/mui";

export interface ControlsProps {
  vidEl: HTMLVideoElement;
}

export const Controls = component$<ControlsProps>(({ vidEl }) => {
  const { isDark, playerState } = useApp();

  // useClientEffect$(({track})=>{
  // 	const vid = track(() => vidEl);
  // 	console.log(vid.currentTime);
  // })

  return (
    <div
      class={`player__controls text-white absolute bottom-0 p-3 bg-black/30 w-full opacity-0 flex items-center flex-col duration-300`}
    >
      <div class="flex w-full items-center justify-between gap-x-2">
        <button
          class={`${
            isDark ? "bg-blackie text-white" : " bg-ytGray text-black"
          } rounded-full`}
        >
          <PauseIcon size={30} />
        </button>
        <MUISlider
          className="w-full translate-y-1"
          onChange$={$((e: any) => {
            console.log(e);
            console.log(playerState.progress);
          })}
          min={0}
          max={Number.isNaN(vidEl.duration) ? 0 : vidEl?.duration}
          value={Number.isNaN(playerState.progress) ? 0 : playerState.progress}
          sx={{
            color: "#ff0000",
            ":hover": {
              "& .MuiSlider-thumb": {
                boxShadow: "unset",
              },
            },
            "& .MuiSlider-thumb": {
              display: "flex",
              width: 6,
              height: 6,
              boxShadow: "unset",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                width: 10,
                height: 10,
                boxShadow: "unset",
              },
            },
          }}
        />
        <button
          class={`p-1 bg-blackie ${
            isDark ? "bg-blackie text-white" : " bg-ytGray text-black"
          } rounded-full`}
        >
          <CogIcon size={22} />
        </button>
      </div>
      <div class="w-full flex items-center justify-center gap-x-2 text-white">
        <BackwardIcon size={30} />
        <span>{vidEl.currentTime}</span>
        <span class="h-[15px] w-[1.5px] bg-white flex"></span>
        <span>{vidEl.duration}</span>
        <ForwardIcon size={30} />
      </div>
    </div>
  );
});
