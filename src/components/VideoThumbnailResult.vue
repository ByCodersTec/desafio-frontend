<template>
  <div>
    <div
      v-for="video in videos"
      :key="$route.name === 'SearchResult' ? video.id.videoId : video.id"
      class="d-flex justify-start align-start mb-3 video"
      @click="goToPlayer($route.name === 'SearchResult' ? video.id.videoId : video.id)"
    >
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="rounded-lg mr-6"
      />
      <div>
        <h4>{{ video.snippet.title }}</h4>
        <div class="d-flex justify-start align-center my-1">
          <img
            :src="video.channel.snippet.thumbnails.default.url"
            :alt="video.channel.snippet.title"
            class="rounded-circle mr-3"
            width="40"
          />
          <span class="text-caption">{{ video.channel.snippet.title }}</span>
        </div>
        <p class="text-caption">
          {{ truncateString(video.snippet.description, 125) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { truncateString } from "@/utils/filters.js";
export default {
  name: "VideoThumbnailResult",
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
.video:hover {
  cursor: pointer;
}
</style>
