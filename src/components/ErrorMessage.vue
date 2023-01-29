<template>
  <div class="d-flex flex-column justify-center align-center my-12 pa-3">
    <v-icon color="yt_red" x-large>mdi-alert-circle-outline</v-icon>
    <span class="subtitle-1 my-6 text-center" v-html="message"></span>
    <v-btn @click="$emit('tryAgain')" class="ma-2" outlined rounded-md color="yt_blue"
      ><span>Tentar Novamente</span>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
        message: {
            type: String,
            default: 'Ocorreu um erro inesperado'
        }
    }
};
</script>

<style>
</style>