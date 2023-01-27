<template>
  <div>
    <div v-for="video in videos" :key="video.id" class="video">
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="thumbnail"
      />
      <div class="video-info">
        <img
          :src="video.channel.snippet.thumbnails.default.url"
          :alt="video.channel.snippet.title"
          class="channel-thumbnail"
        />
        <div>
          <h3>{{ video.snippet.title }}</h3>
          <p>{{ video.channel.snippet.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoThumbnail",
  props: {
    videos: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  .thumbnail {
    border-radius: 10px;
    margin-bottom: 6px;
  }
  .video-info {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    .channel-thumbnail {
      border-radius: 50%;
      width: 36px;
    }
  }
}
</style>
