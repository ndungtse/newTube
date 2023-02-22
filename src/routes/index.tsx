import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavBox } from "~/components/home/NavBox";
import navbox from "~/utils/navbox";
import { VideoCard } from "~/components/home/VideoCard";
import { AppContext } from "~/contexts/AppProvider";

export default component$(() => {
  const { videos } = useContext(AppContext);

  return (
    <div class={`w-full`}>
      <div class="w-full scroller gap-x-2 flex mt-5 overflow-x-auto">
        {navbox.map((box, i) => (
          <NavBox box={box} Icon={box.icon} key={i} active />
        ))}
      </div>
      <div class="grid desktop:grid-cols-5 xtab:grid-cols-4 ltab:grid-cols-3 five:grid-cols-2 w-full gap-3 mt-4">
        {videos?.map((video, i) => (
          <VideoCard key={i} video={video.video} />
        ))}
      </div>
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
  links: [],
};
