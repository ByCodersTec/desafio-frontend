<template>
  <div>
    <div v-for="video in videos" :key="video.id.videoId" class="d-flex justify-start align-start">
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
            class="rounded mr-3"
            width="40"
          />
          <span class="text-caption">{{ video.channel.snippet.title }}</span>
        </div>
        <p class="text-caption">{{ video.snippet.description }}</p>
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
