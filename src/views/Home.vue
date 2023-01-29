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
    <div v-else>
      <div v-if="!isMobile">
        <h4 class="body-1">Em alta 🔥</h4>
        <v-divider class="mb-6 mt-3"></v-divider>
      </div>
      <VideoMobileVideoThumbnail
        v-if="isMobile"
        :videos="videos"
        class="videos"
      />
      <VideoThumbnail v-else :videos="videos" class="videos" />
    </div>
  </div>
</template>

<script>
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnail from "@/components/VideoThumbnail.vue";
import { listVideos, listChannels } from "@/services/youtube-api.js";
export default {
  name: "Home",
  components: { VideoThumbnail, VideoMobileVideoThumbnail },
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
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
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
    grid-template-columns: repeat(1, 1fr);
    gap: 16px 32px;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1800px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>