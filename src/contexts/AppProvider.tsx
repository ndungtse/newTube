import {
  component$,
  createContext,
  Slot,
  useContext,
  useContextProvider,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { fetcRelatedVideos } from "~/utils/fetch";
import type { IPlayerState, VideoResponse } from "~/utils/types";

interface AppStore {
  isDark: boolean;
  playerState: IPlayerState;
  videos: VideoResponse["contents"];
}

export const AppContext = createContext<AppStore>("App");

export const useApp = () => useContext(AppContext);

export const AppProvider = component$(() => {
  const appState = useStore<AppStore>({
    isDark: false,
    playerState: {
      progress: 0,
      isFullScreen: false,
      isMuted: false,
      isPicInPic: false,
      isPlaying: false,
      volume: 1,
      loop: "false",
      speed: 1,
      shuffle: false,
    },
    videos: [],
  });
  useContextProvider(AppContext, appState);

  useTask$(async () => {
    if (isServer) {
      const data: VideoResponse = (await fetcRelatedVideos(
        "kJQP7kiw5Fk"
      )) as VideoResponse;
      appState.videos = data?.contents;
    }
  });

  return (
    <div class="provider">
      <Slot />
    </div>
  );
});
