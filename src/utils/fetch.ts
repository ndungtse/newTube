import axios from "axios";
import type { Video, VideoResponse } from "./types";

export const apiKey = import.meta.env.VITE_API_KEY;
export const url = "https://youtube138.p.rapidapi.com.com";

export const fetchApi = async (path: string, params?: {}) => {
  const response = await axios.get(url + path, {
    params: params,
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  });
  return response.data;
};

export const fetcRelatedVideos = async (videoId: string) => {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/video/related-contents/",
    params: { id: videoId, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data as VideoResponse;
    })
    .catch(function (error) {
      console.error(error);
      return [] as VideoResponse["contents"];
    });
};

export const getVideoDetails = async (videoId: string) => {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/video/details/",
    params: { id: videoId, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data as Video;
    })
    .catch(function (error) {
      console.error(error);
      return {} as Video;
    });
};
