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
          <v-icon color="yt_black">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    },
  },
  data() {
    return {
      drawer: true,
      items: [{ title: "Home", icon: "mdi-home", route: "Home" }],
      mini: true,
    };
  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
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