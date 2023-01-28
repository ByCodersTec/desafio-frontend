<template>
  <div>
    <Header @openSidebar="sidebar = !sidebar" :isMobile="isMobile" />
    <div class="layout">
      <SideBarNavegation v-if="!isMobile" :sidebar="sidebar" />
      <v-container fluid class="pa-4">
        <router-view />
      </v-container>
    </div>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import SideBarNavegation from "../layouts/SideBarNavegation.vue";

export default {
  components: { Header, SideBarNavegation },
  name: "Default",
  data() {
    return {
      sidebar: false,
      isMobile: false,
    };
  },
  mounted() {
    const vue = this;
    window.addEventListener("resize", () => {
      vue.isMobile = window.innerWidth <= 768;
    });
    vue.isMobile = window.innerWidth <= 768;
  },
};
</script>