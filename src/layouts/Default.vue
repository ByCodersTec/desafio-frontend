<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
export default {
  components: { Header },
  name: "Default",
};
</script>
