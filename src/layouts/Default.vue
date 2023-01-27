<template>
  <div>
    <Header @openSidebar="sidebar = !sidebar" />
    <div>
      <SideBarNavegation :sidebar="sidebar" />
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
    };
  },
};
</script>
