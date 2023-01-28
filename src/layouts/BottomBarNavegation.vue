<template>
  <div class="pa-1 yt_white bottom-bar">
    <div
      v-for="item in items"
      :key="item.title"
      link
      @click="goTo(item.route)"
      class="d-flex flex-column align-center"
    >
    <v-icon color="yt_black">{{ item.icon }}</v-icon>
    <span class="caption">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBarNavegation",
  data() {
    return {
      items: [{ title: "Home", icon: "mdi-home", route: "Home" }],
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
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    box-shadow: 0px -5px 10px 2px rgba(0,0,0,0.1);
}
</style>