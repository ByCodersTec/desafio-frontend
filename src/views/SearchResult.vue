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
    <VideoThumbnailResult v-else :videos="videos" class="videos" />
  </div>
</template>

<script>
import VideoThumbnailResult from "@/components/VideoThumbnailResult.vue";
import { listSearch, listChannels } from "@/services/youtube-api.js";
export default {
  name: "SearchResult",
  components: { VideoThumbnailResult },
  data() {
    return {
      search: "",
      videos: [],
      loading: false,
    };
  },
  mounted() {
    this.search = this.$route.query.search_query;
    this.getVideos();
  },
  methods: {
    async getVideos() {
      try {
        this.loading = true;
        const data = await listSearch(this.search);
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
.search {
    width: 90%;
    margin: 0 auto;
}
</style>
