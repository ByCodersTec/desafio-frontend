import { apiInstance } from "@/utils/api-instance";

const key = "AIzaSyBVT81d3-k_-QQ_-7ARIJpyJV7sd7nhk7I";

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
  