<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center loading">
      <v-progress-circular
        :size="70"
        :width="2"
        color="yt_red"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <ErrorMessage
        v-if="error"
        @tryAgain="getVideoPlayer"
        :message="errorMessage"
      />
      <div class="player" v-else>
        <VideoPlayer v-if="checkChanell" :video="video" />
        <VideoMobileVideoThumbnail v-if="isMobile" :videos="videoRecommended" />
        <VideoRecommended v-else :videos="videoRecommended" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getVideo,
  listChannels,
  listVideosRecommended,
} from "@/services/youtube-api.js";
import ErrorMessage from "@/components/ErrorMessage.vue";
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoRecommended from "@/components/VideoRecommended.vue";
import { mapActions } from "vuex";
export default {
  name: "Player",
  components: {
    VideoPlayer,
    VideoMobileVideoThumbnail,
    VideoRecommended,
    ErrorMessage,
  },
  data() {
    return {
      video: {},
      videoRecommended: [],
      loading: false,
      error: false,
      errorMessage: "",
    };
  },
  mounted() {
    this.getVideoPlayer();
  },
  methods: {
    ...mapActions(["setWatchedHistory", "setTitlePage"]),
    async getVideoPlayer() {
      try {
        this.loading = true;
        const data = await getVideo(this.$route.query.v);
        this.video = data.items[0];
        this.setTitlePage(this.video.snippet.title + " - YouTube");
        const channel = await this.getChannelThumb(
          this.video.snippet.channelId
        );
        this.video.channel = channel.items[0];
        this.setHistory(this.video);
        const dataRecommended = await listVideosRecommended(
          this.video.snippet.categoryId
        );
        dataRecommended.items.map(async (video) => {
          const channel = await this.getChannelThumb(video.snippet.channelId);
          video.channel = channel.items[0];
          this.videoRecommended.push(video);
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
    getChannelThumb(id) {
      const channel = listChannels(id);
      return channel;
    },
    setHistory(video) {
      const historyVideo = this.$store.state.watchedVideos.find(
        (element) => element === video.id
      );
      if (video.id != historyVideo) {
        this.setWatchedHistory(video.id);
      }
    },
  },
  watch: {
    async query() {
      const newVideoRecommended = [];
      this.videoRecommended = newVideoRecommended;
      await this.getVideoPlayer();
    },
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    query() {
      return this.$route.query.v;
    },
    checkChanell() {
      return Object.hasOwn(this.video, "channel");
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  gap: 32px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1280px) {
    max-width: 100%;
    margin: 0;
  }
}
</style>