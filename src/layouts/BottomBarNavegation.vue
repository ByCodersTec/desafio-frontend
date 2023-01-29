<template>
  <div
    class="pa-1 yt_white bottom-bar d-flex align-center justify-space-around"
  >
    <div
      v-for="item in items"
      :key="item.title"
      link
      @click="goTo(item.route)"
      class="d-flex flex-column align-center"
    >
      <v-icon :color="checkRoute(item.route)">{{ item.icon }}</v-icon>
      <span :class="['caption', checkRoute(item.route) + '--text']">{{
        item.title
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBarNavegation",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", route: "Home" },
        { title: "Histórico", icon: "mdi-history", route: "History" },
      ],
    };
  },
  methods: {
    goTo(route) {
      if (this.$route.name != route) {
        this.$router.push({ name: route });
      }
    },
    checkRoute(name) {
      return name == this.$route.name ? "yt_black" : "yt_gray";
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  box-shadow: 0px -5px 10px 2px rgba(0, 0, 0, 0.1);
  div {
    cursor: pointer;
  }
}
</style>