<template>
  <div>
    <div
      v-for="video in videos"
      :key="video.id"
      class="video"
      @click="goToPlayer(video.id)"
    >
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="rounded-lg"
        width="100%"
      />
      <div class="d-flex justify-start align-start">
        <img
          :src="video.channel.snippet.thumbnails.default.url"
          :alt="video.channel.snippet.title"
          class="rounded-circle mr-3"
          width="36px"
        />
        <div>
          <h4>{{ truncateString(video.snippet.title, 50) }}</h4>
          <span class="caption">{{ video.channel.snippet.title }}</span>
          <p class="caption ma-0">
            {{
              formatCountSubscribed(video.statistics.viewCount) +
              " visulizações"
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { truncateString, formatCountSubscribed } from "@/utils/filters.js";
export default {
  name: "VideoThumbnail",
  props: {
    videos: {
      type: Array,
    },
  },
  methods: {
    truncateString,
    formatCountSubscribed,
    goToPlayer(id) {
      this.$router.push({
        name: "Player",
        query: { v: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  transition: all 0.3s ease-out;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    background: #fff;
    transition: all 0.3s ease-out;
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>