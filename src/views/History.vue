<template>
  <div class="history">
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
        <h4 class="body-1">Histórico de exibição</h4>
        <v-divider class="mb-6 mt-3"></v-divider>
      </div>
      <VideoMobileVideoThumbnail
        v-if="isMobile"
        :videos="videos"
      />
      <VideoThumbnailResult v-else :videos="videos" />
    </div>
  </div>
</template>

<script>
import { getVideosHistory, listChannels } from "@/services/youtube-api.js";
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnailResult from "@/components/VideoThumbnailResult.vue";
export default {
  name: "History",
  components: {
    VideoThumbnailResult,
    VideoMobileVideoThumbnail
  },
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
        const data = await getVideosHistory(this.videoHistory.join(","));
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
    videoHistory() {
      return this.$store.state.watchedVideos;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
}
</style>