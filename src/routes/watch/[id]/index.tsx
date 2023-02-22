import { component$, useStore, useTask$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";
import { Comments } from "~/components/watch/Comments";
// import { Player } from "~/components/watch/Player";
import { Similar } from "~/components/watch/Similar";
import YouTubePlayer from "~/components/watch/YoutubePlayer";
import { useApp } from "~/contexts/AppProvider";
import {
  BellIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  GridAltIcon,
  PlusIcon,
} from "~/integrations/react/icons";
import { formatNumber } from "~/utils";
import { getVideoDetails } from "~/utils/fetch";
import type { Video } from "~/utils/types";

export default component$(() => {
  const { isDark } = useApp();
  const data$ = useStore<{ video: Video | null }>({
    video: null,
  });
  const loc = useLocation();

  //   fetch video on mount
  useTask$(async () => {
    if (isServer) {
      console.log(loc.params.id);
      const data = await getVideoDetails(loc.params.id);
      console.log(data);
      data$.video = data;
    }
  });

  return (
    <div class="flex w-full p-3">
      <div class="flex w-full flex-col">
        {/* <Player /> */}
        <YouTubePlayer videoId={data$.video?.videoId ?? ""} />
        <div class="flex w-full flex-col text-sm">
          <div class="tags flex items-center text-blue-600 font-semibold gap-x-3 text-sm">
            <span>#{data$.video?.category}</span>
          </div>
          <span class="text-sm font-semibold mt-3">{data$.video?.title??null}</span>
          <span class="opacity-75 text-sm mt-4">
            {formatNumber(Number(data$.video?.stats.views))} views
          </span>
          <div class="flex items-end justify-between w-full font-semibold">
            <span class="opacity-75 text-sm">{data$.video?.publishedDate}</span>
            <div class="flex items-center gap-x-3">
              <button
                class={`${
                  isDark ? " bg-blackie text-white" : "bg-ytGray"
                } p-2 rounded-md gap-x-2`}
              >
                <span>❤️😂😥</span>
                <span>{formatNumber(Number(data$.video?.stats.likes))}</span>
              </button>
              <button
                class={`${
                  isDark ? " bg-blackie text-white" : "bg-ytGray"
                } p-2 rounded-full`}
              >
                <DotsHorizontalIcon size={21} />
              </button>
            </div>
          </div>
        </div>
        <hr
          class={`w-full h-[0.1em] ${
            isDark ? "bg-black/70" : "bg-black/10"
          } my-4 border-none`}
        />
        <div class="flex flex-col w-full">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-x-2">
              <div class="h-[50px] w-[50px] rounded-full overflow-hidden">
                <img
                  class="object-cover"
                  src={data$.video?.author?.avatar?.url ?? "/arg.jpg"}
                  alt=""
                />
              </div>
              <div class="flex flex-col text-xs font-semibold">
                <span>{data$.video?.author?.title??null}</span>
                <span class="opacity-70">
                  {data$.video?.author?.stats?.subscribersText}
                </span>
              </div>
            </div>
            <button class="px-6 py-2 bg-ytred text-white text-sm rounded-md font-semibold">
              Subscribe
            </button>
          </div>
          <span class="text-sm font-[500] mt-2">
            {data$.video?.description}
          </span>
          <button class="text-sm font-bold flex items-center mt-2">
            Show more
            <ChevronDownIcon className="ml-2" />
          </button>
        </div>
        <hr
          class={`w-full h-[0.1em] ${
            isDark ? "bg-black/70" : "bg-black/10"
          } my-4  border-none`}
        />
        <Comments video={data$.video} />
      </div>
      <div class="flex flex-col mx-[1%] gap-2">
        <button
          class={`${
            isDark ? " bg-blackie text-white" : "bg-ytGray"
          } p-2 rounded-full`}
        >
          <GridAltIcon />
        </button>
        <button
          class={`${
            isDark ? " bg-blackie text-white" : "bg-ytGray"
          } p-2 rounded-full`}
        >
          <PlusIcon />
        </button>
        <button
          class={`${
            isDark ? " bg-blackie text-white" : "bg-ytGray"
          } p-2 rounded-full`}
        >
          <BellIcon />
        </button>
      </div>
      <Similar />
    </div>
  );
});

export const head: DocumentHead = {
  title: "NewTube",
  meta: [
    {
      name: "description",
      content: "A video streaming platform like YouTube",
    },
  ],
};
