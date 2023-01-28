<template>
  <div class="video">
      <div class="video-container">
        <iframe
          id="ytplayer"
          type="text/html"
          :src="videoPath"
          frameborder="0"
          width="100%"
          allow="autoplay"
        />
      </div>
      <h3 class="my-3">{{ video.snippet.title }}</h3>
      <div class="d-flex justify-start align-center">
        <img
          :src="video.channel.snippet.thumbnails.default.url"
          :alt="video.channel.snippet.title"
          width="40"
          class="mr-3"
        />
        <div class="d-flex justify-center flex-column">
          <h4>{{ video.channel.snippet.title }}</h4>
          <p class="mb-0 text-caption">{{ video.channel.statistics.subscriberCount }}</p>
        </div>
      </div>
      <div class="pa-6 mt-3 yt_ligth_gray rounded-lg">
        <p v-html="description"></p>
      </div>
    </div>
</template>

<script>
export default {
    name: "VideoPlayer",
    props: {
        video: Object
    },
    computed: {
        description() {
            return this.video.snippet.description.replaceAll('\n', '<br />')
        },
        videoPath() {
            return `http://www.youtube.com/embed/${this.video.id}?autoplay=1&showinfo=0&mute=0`
        }
    }
}
</script>

<style lang="scss" scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ytp-chrome-top {
    display: none;
}
</style>