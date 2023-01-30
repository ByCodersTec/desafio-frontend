<template>
  <div class="home">
    <div>
      <div class="mb-9">
        <div v-if="!isMobile">
          <h4 class="body-1">Em alta 🔥</h4>
          <v-divider class="mb-6 mt-3"></v-divider>
        </div>
        <Loading v-if="loadingVideo" />
        <div v-else>
          <ErrorMessage
            v-if="error"
            @tryAgain="getVideos"
            :message="errorMessage"
          />
          <div v-else>
            <VideoMobileVideoThumbnail
              v-if="isMobile"
              :videos="videos"
              class="videos"
            />
            <VideoThumbnail v-else :videos="videos" class="videos" />
          </div>
        </div>
      </div>
      <div>
        <div v-if="!isMobile">
          <h4 class="body-1">Categorias 🎬</h4>
          <v-divider class="mb-6 mt-3"></v-divider>
        </div>
        <v-slide-group v-if="categories" show-arrows="always" class="mb-6 mt-3">
          <v-slide-item v-for="category in categories" :key="category.id">
            <v-btn
              class="mx-2"
              :input-value="selectedCategory === category.id"
              active-class="yt_red yt_white--text"
              depressed
              rounded
              @click="getVideosByCategories(category.id)"
            >
              {{ category.snippet.title }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
        <Loading v-if="loadingCategory" />
        <div v-else>
          <ErrorMessage
            v-if="errorCategory"
            @tryAgain="getVideoCategories"
            :message="errorMessageCategory"
          />
          <VideoMobileVideoThumbnail
            v-if="isMobile"
            :videos="videosCategories"
            class="videos"
          />
          <VideoThumbnail v-else :videos="videosCategories" class="videos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import VideoMobileVideoThumbnail from "@/components/VideoMobileVideoThumbnail.vue";
import VideoThumbnail from "@/components/VideoThumbnail.vue";
import {
  listVideos,
  listChannels,
  listVideoCategories,
  listVideosByCategories,
} from "@/services/youtube-api.js";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    VideoThumbnail,
    VideoMobileVideoThumbnail,
    ErrorMessage,
    Loading,
  },
  data() {
    return {
      videos: [],
      loadingVideo: false,
      loading: false,
      error: false,
      errorMessage: "",
      categories: [],
      videosCategories: [],
      loadingCategory: false,
      errorCategory: false,
      errorMessageCategory: "",
      selectedCategory: "1",
    };
  },
  mounted() {
    this.getVideos();
    this.getVideoCategories();
    this.setTitlePage("YouTube");
  },
  methods: {
    ...mapActions(["setTitlePage"]),
    async getVideos() {
      try {
        this.loadingVideo = true;
        const data = await listVideos();
        data.items.map(async (video) => {
          const channel = await this.getChannelThumb(video.snippet.channelId);
          video.channel = channel.items[0];
          this.videos.push(video);
        });
        this.error = false;
      } catch (error) {
        this.error = true;
        this.loadingVideo = false;
        this.errorMessage = error.response.data.error.message;
      } finally {
        this.loadingVideo = false;
      }
    },
    async getVideosByCategories(id) {
      this.selectedCategory = id;
      this.videosCategories = [];
      try {
        this.loadingCategory = true;
        const data = await listVideosByCategories(id);
        data.items.map(async (video) => {
          const channel = await this.getChannelThumb(video.snippet.channelId);
          video.channel = channel.items[0];
          this.videosCategories.push(video);
        });
        this.errorCategory = false;
      } catch (error) {
        this.errorCategory = true;
        this.loadingCategory = false;
        this.errorMessageCategory = error.response.data.error.message;
      } finally {
        this.loadingCategory = false;
      }
    },
    getChannelThumb(id) {
      const channel = listChannels(id);
      return channel;
    },
    async getVideoCategories() {
      try {
        const data = await listVideoCategories();
        this.categories = data.items;
        await this.getVideosByCategories(this.categories[0].id);
        this.errorCategory = false;
      } catch (error) {
        this.errorCategory = true;
        this.errorMessageCategory = error.response.data.error.message;
      }
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
::v-deep .v-slide-group__wrapper {
  width: 200px;
}
</style>