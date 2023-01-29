<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="sidebar"
    clipped
    floating
    class="sidebar"
    mobile-breakpoint="768"
    :disable-resize-watcher="true"
    :stateless="true"
  >
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="goTo(item.route)"
      >
        <v-list-item-icon>
          <v-icon :color="checkRoute(item.route)">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title :class="[checkRoute(item.route) + '--text']">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBarNavegation",
  props: {
    sidebar: {
      type: Boolean,
      required: true,
      selectedItem: 0,
    },
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home", route: "Home" },
        { title: "Histórico", icon: "mdi-history", route: "History" },
      ],
      mini: true,
    };
  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
    checkRoute(name) {
      return name == this.$route.name ? "yt_black" : "yt_gray";
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 56px !important;
}
</style>