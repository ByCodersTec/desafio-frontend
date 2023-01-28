<template>
  <div>
    <div v-for="video in videos" :key="video.id" class="video">
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
          class="rounded mr-3"
          width="36px"
        />
        <div>
          <h4>{{ video.snippet.title }}</h4>
          <span>{{ video.channel.snippet.title }}</span>
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
