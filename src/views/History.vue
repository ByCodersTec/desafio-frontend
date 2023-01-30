<template>
  <div class="history">
    <Loading v-if="loading" />
    <div v-else>
      <div v-if="!isMobile">
        <h4 class="body-1">Histórico de exibição 🕐</h4>
        <v-divider class="mb-6 mt-3"></v-divider>
      </div>
      <VideoMobileVideoThumbnail v-if="isMobile" :videos="videos" />
      <VideoThumbnailResult v-else :videos="videos" />
      <ErrorMessage
        v-if="error"
        @tryAgain="getVideos"
        :message="errorMessage"
      />
    </div>
  </div>
</template>

<script>
import { getVideosHistory, listChannels, listSearch } from "@/services/youtube-api.js";
import Loading from "@/components/Loading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnailResult from "@/components/VideoThumbnailResult.vue";
import { mapActions } from "vuex";
export default {
  name: "History",
  components: {
    VideoThumbnailResult,
    VideoMobileVideoThumbnail,
    ErrorMessage,
    Loading
  },
  data() {
    return {
      videos: [],
      nextPageToken: "",
      loading: false,
      error: false,
      loadingNext: false,
      errorMessage: "",
    };
  },
  mounted() {
    this.getVideos();
    this.setTitlePage("Histórico - YouTube");
  },
  methods: {
    ...mapActions(["setTitlePage"]),
    async getVideos() {
      try {
        this.loading = true;
        const data = await getVideosHistory(this.videoHistory.join(","));
        this.nextPageToken = data.nextPageToken;
        data.items.map(async (video) => {
          const channel = await this.getChannelThumb(video.snippet.channelId);
          video.channel = channel.items[0];
          this.videos.push(video);
        });
        this.error = false;
      } catch (error) {
        this.error = true;
        this.loading = false;
        this.errorMessage = error.response.data.error.message;
      } finally {
        this.loading = false;
      }
    },
    async getNextVideos(search, token) {
      try {
        this.loadingNext = true
        const data = await listSearch(search, token);
        this.nextPageToken = data.nextPageToken;
        data.items.map(async (video) => {
          const idVideo = this.videos.find(
            (element) => element.id.videoId === video.id.videoId
          );
          if (idVideo === undefined) {
            const channel = await this.getChannelThumb(video.snippet.channelId);
            video.channel = channel.items[0];
            this.videos.push(video);
          }
        });
        this.error = false;
      } catch (error) {
        this.error = true;
        this.loadingNext = false;
        this.errorMessage = error.response.data.error.message;
      } finally {
        this.loadingNext = false;
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