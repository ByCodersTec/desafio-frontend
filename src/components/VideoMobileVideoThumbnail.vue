<template>
  <div>
    <div
      v-for="video in videos"
      :key="$route.name === 'SearchResult' ? video.id.videoId : video.id"
      class="mb-3"
      @click="goToPlayer($route.name === 'SearchResult' ? video.id.videoId : video.id)"
    >
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        width="100%"
      />
      <div class="d-flex justify-start align-start pa-3">
        <img
          :src="video.channel.snippet.thumbnails.default.url"
          :alt="video.channel.snippet.title"
          class="rounded-circle mr-3"
          width="40px"
        />
        <div>
          <h4 class="body-2">{{ video.snippet.title }}</h4>
          <span class="caption">{{ video.channel.snippet.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoMobileVideoThumbnail",
  props: {
    videos: {
      type: Array,
    },
  },
  methods: {
    goToPlayer(id) {
      this.$router.push({
        name: "Player",
        query: { v: id },
      });
    },
  },
};
</script>
