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
    </div>
  </div>
</template>

<script>
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnailResult from "@/components/VideoThumbnailResult.vue";
import { listSearch, listChannels } from "@/services/youtube-api.js";
import { mapActions } from "vuex";
export default {
  name: "SearchResult",
  components: { VideoThumbnailResult, VideoMobileVideoThumbnail },
  data() {
    return {
      search: "",
      videos: [],
      loading: false,
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
  watch: {
    async query() {
      const newVideos = [];
      this.videos = newVideos;
      await this.getVideos(this.$route.query.search_query);
      await this.setTitlePage(this.$route.query.search_query + ' - YouTube')
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
