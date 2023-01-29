<template>
  <div class="recommended">
    <h5>Recomendados</h5>
    <v-divider class="my-3"></v-divider>
    <div
      v-for="video in videos"
      :key="video.id.videoId"
      class="d-flex justify-start align-start mb-3"
      @click="goToPlayer(video.id)"
    >
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="rounded-lg mr-3 thumbnails"
      />
      <div class="video-info mt-1">
        <h5>{{ truncateString(video.snippet.title, 45) }}</h5>
        <span class="text-caption">{{ video.snippet.channelTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { truncateString } from "@/utils/filters.js";
export default {
  name: "VideoRecommended",
  props: {
    videos: {
      type: Array,
    },
  },
  methods: {
    truncateString,
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
.thumbnails {
  width: 40%;
}
</style>
