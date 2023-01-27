<template>
  <div class="home">
    <div v-if="loading" class="d-flex justify-center align-center loading">
      <v-progress-circular
        :size="70"
        :width="2"
        color="yt_red"
        indeterminate
      ></v-progress-circular>
    </div>
    <VideoThumbnail v-else :videos="videos" class="videos" />
  </div>
</template>

<script>
import VideoThumbnail from "@/components/VideoThumbnail.vue";
import { listVideos, listChannels } from "@/services/youtube-api.js";
export default {
  name: "Home",
  components: { VideoThumbnail },
  data() {
    return {
      videos: [],
      loading: false,
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    async getVideos() {
      try {
        this.loading = true;
        const data = await listVideos();
        data.items.map(async (video) => {
          const channel = await this.getChannelThumb(video.snippet.channelId);
          video.channel = channel.items[0];
          this.videos.push(video);
        });
      } catch {
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },
    getChannelThumb(id) {
      const channel = listChannels(id);
      return channel;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .loading {
    height: 80vh;
  }
  .videos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
}
}
</style>