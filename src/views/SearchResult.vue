<template>
  <div class="search">
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
        <h4 class="body-1">Resultado da busca</h4>
        <v-divider class="mb-6 mt-3"></v-divider>
      </div>
      <VideoMobileVideoThumbnail
        v-if="isMobile"
        :videos="videos"
        class="videos"
      />
      <VideoThumbnailResult v-else :videos="videos" class="videos" />
      <ErrorMessage
        v-if="error"
        @tryAgain="getVideos($route.query.search_query)"
        :message="errorMessage"
      />
      <div class="d-flex justify-center flex-column align-center mt-6" v-if="nextPageToken">
        <v-progress-circular
          :size="30"
          :width="2"
          color="yt_red"
          indeterminate
          class="my-6"
          v-if="loadingNext"
        ></v-progress-circular>
        <v-icon
          @click="getNextVideos($route.query.search_query, nextPageToken)"
          large
          >mdi-chevron-down</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnailResult from "@/components/VideoThumbnailResult.vue";
import { listSearch, listChannels } from "@/services/youtube-api.js";
import { mapActions } from "vuex";
export default {
  name: "SearchResult",
  components: { VideoThumbnailResult, VideoMobileVideoThumbnail, ErrorMessage },
  data() {
    return {
      search: "",
      videos: [],
      nextPageToken: "",
      loading: false,
      loadingNext: false,
      error: false,
      errorMessage: "",
    };
  },
  mounted() {
    this.getVideos(this.$route.query.search_query);
  },
  methods: {
    ...mapActions(["setTitlePage"]),
    async getVideos(search) {
      try {
        this.loading = true;
        const data = await listSearch(search);
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
  watch: {
    async query() {
      const newVideos = [];
      this.videos = newVideos;
      await this.getVideos(this.$route.query.search_query);
      await this.setTitlePage(this.$route.query.search_query + " - YouTube");
    },
  },
  computed: {
    query() {
      return this.$route.query.search_query;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
}
</style>
