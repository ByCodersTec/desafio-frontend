<template>
  <div>
    <Header @openSidebar="sidebar = !sidebar" :isMobile="isMobile" />
    <div class="layout">
      <SideBarNavegation v-if="!isMobile" :sidebar="sidebar" />
      <v-container fluid :class="['pa-4 mb-12', {'px-0': isMobile}]">
        <router-view />
      </v-container>
    </div>
    <BottomBarNavegation v-if="isMobile" />
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import SideBarNavegation from "../layouts/SideBarNavegation.vue";
import BottomBarNavegation from "../layouts/BottomBarNavegation.vue";
import { mapActions } from "vuex";
export default {
  components: { Header, SideBarNavegation, BottomBarNavegation },
  name: "Default",
  data() {
    return {
      sidebar: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkIsMobile();
  },
  methods: {
    ...mapActions(["setIsMobile"]),
    checkIsMobile() {
      window.addEventListener("resize", () => {
        this.isMobile = window.innerWidth <= 768;
        this.setIsMobile(this.isMobile)
      });
      this.isMobile = window.innerWidth <= 768;
      this.setIsMobile(this.isMobile)
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>