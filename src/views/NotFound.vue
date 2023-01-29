<template>
  <div class="d-flex flex-column justify-center align-center not-found">
    <img src="@/assets/404-icon.svg" alt="Página não encontrada" />
    <span class="display-1 my-6">Página não encontrada</span>
    <v-btn @click="goToHome" class="ma-2" outlined rounded-md color="yt_blue"
      ><span>Página Inicial</span>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NotFound",
  mounted() {
    this.setTitlePage('Página não encontrada - YouTube')
  },
  methods: {
    ...mapActions(["setTitlePage"]),
    goToHome() {
      this.$router.push({ name: "Home", query: { search_query: this.select } });
    },
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 80vh;
}
</style>