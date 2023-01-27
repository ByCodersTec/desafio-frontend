<template>
  <div>
    <v-app-bar app flat color="yt_white">
      <v-app-bar-nav-icon color="yt_black"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center">
        <img
          src="@/assets/logo.svg"
          alt="Página inicial do YouTube"
          height="20px"
          width="90px"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        dense
        flat
        hide-no-data
        hide-details
        label="Pesquisar"
        persistent-placeholder="true"
        placeholder="Pesquisar"
        solo
        rounded
        prepend-inner-icon="mdi-magnify"
        append-icon=""
        color="yt_black"
        outlined
      ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined rounded color="yt_blue"><v-icon class="mr-2">mdi-account-circle-outline</v-icon> Fazer login </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
