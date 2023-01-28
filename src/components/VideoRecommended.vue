<template>
  <div class="recommended">
      <h5>Recomendados</h5>
      <v-divider class="my-3"></v-divider>
      <div v-for="video in videos" :key="video.id.videoId" class="d-flex justify-start mb-3">
        <img
          :src="video.snippet.thumbnails.medium.url"
          :alt="video.snippet.title"
          class="rounded-lg mr-3"
          width="168"
        />
        <div class="video-info">
          <h5>{{ video.snippet.title }}</h5>
          <span class="text-caption">{{ video.snippet.channelTitle }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "VideoRecommended",
    props: {
      videos: {
        type: Array
      }
    }
}
</script>
