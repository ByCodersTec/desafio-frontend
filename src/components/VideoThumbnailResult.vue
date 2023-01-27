<template>
  <div>
    <div v-for="video in videos" :key="video.id.videoId" class="video">
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="thumbnail"
      />
      <div class="video-info">
        <h3>{{ video.snippet.title }}</h3>
        <div class="channel">
          <img
            :src="video.channel.snippet.thumbnails.default.url"
            :alt="video.channel.snippet.title"
            class="channel-thumbnail"
          />
          <p>{{ video.channel.snippet.title }}</p>
        </div>
        <p>{{ video.snippet.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoThumbnailResult",
  props: {
    videos: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  margin-bottom: 10px;
  .thumbnail {
    border-radius: 10px;
    margin-bottom: 6px;
  }
  .video-info {
    .channel {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 8px;
      .channel-thumbnail {
        border-radius: 50%;
        width: 36px;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
