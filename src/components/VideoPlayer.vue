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
        modestbranding="0"
        showinfo="1"
        allowfullscreen
      >
      </iframe>
    </div>
    <div :class="[{ 'px-4': isMobile }]">
      <h3 class="my-3">{{ video.snippet.title }}</h3>
      <div class="d-flex justify-start align-center">
        <img
          :src="video.channel.snippet.thumbnails.default.url"
          :alt="video.channel.snippet.title"
          width="40"
          class="mr-3 rounded-circle"
        />
        <div class="d-flex justify-center flex-column">
          <h4>{{ video.channel.snippet.title }}</h4>
          <p class="mb-0 text-caption">
            {{
              formatCountSubscribed(video.channel.statistics.subscriberCount)
            }}
            de inscritos
          </p>
        </div>
      </div>
    </div>
    <div class="pa-6 mt-3 yt_ligth_gray rounded-lg">
      <div>
        <p v-if="!readMoreActivated" v-html="description.slice(0, 150) + '...'"></p>
        <p v-else v-html="description"></p>
        <div class="d-flex justify-center">
          <v-icon @click="readMoreActivated = !readMoreActivated"> {{readMoreActivated ? 'mdi-chevron-up' : 'mdi-chevron-down'}} </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCountSubscribed } from "@/utils/filters.js";
export default {
  name: "VideoPlayer",
  props: {
    video: Object,
  },
  data() {
    return {
      readMoreActivated: false,
    };
  },
  methods: {
    formatCountSubscribed,
  },
  computed: {
    description() {
      return this.video.snippet.description.replaceAll("\n", "<br />");
    },
    videoPath() {
      return `https://www.youtube.com/embed/${this.video.id}?autoplay=1&showinfo=1&mute=0`;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style lang="scss">
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
</style>