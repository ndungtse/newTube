import { component$ } from "@builder.io/qwik";
import { useApp } from "~/contexts/AppProvider";
import type { Video } from "~/utils/types";
import { Comment } from "./Comment";

export interface CommentsProps {
  video: Video | null;
}

export const Comments = component$<CommentsProps>(({ video }) => {
  const { isDark } = useApp();

  return (
    <div class="flex flex-col text-sm gap-y-4">
      <span class="font-semibold">{video?.stats?.comments} Comments</span>
      <div class="flex items-center gap-x-3">
        <img
          class="h-[40px] w-[40px] rounded-full object-cover"
          src="/arg.jpg"
          alt=""
        />
        <input
          class={`bg-transparent w-full border-b-2 ${
            isDark && "border-blackie"
          } focus:border-slate-300 duration-300 p-2 outline-none`}
          type="text"
          placeholder="Leave a comment"
        />
        <button
          class={`${
            isDark ? " bg-blackie text-white" : "bg-ytGray"
          } px-4 py-2 rounded-md font-semibold`}
        >
          Post
        </button>
      </div>
      <div class="flex flex-col px-3 gap-y-4">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
});
