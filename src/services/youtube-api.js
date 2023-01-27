import { apiInstance } from "@/utils/api-instance";

const key = process.env.VUE_APP_YOUTUBE_API_KEY

export const listVideos = async () => {
  const { data } = await apiInstance.get(
    `videos?key=${key}&part=snippet&chart=mostPopular&maxResults=12`
  );
  return data;
};

export const listChannels = async (id) => {
  const { data } = await apiInstance.get(
    `channels?key=${key}&part=snippet&id=${id}`
  );
  return data;
};

export const listSearch = async (search) => {
  const { data } = await apiInstance.get(
    `search?key=${key}&part=snippet&q=${search}&maxResults=12`
  );
  return data;
};
