<template>
  <div>
    <v-app-bar app flat color="yt_white">
      <v-app-bar-nav-icon
        color="yt_black"
        @click.stop="$emit('openSidebar')"
      ></v-app-bar-nav-icon>
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
        @click.clear="clearSearch"
        @input="goToResults"
        class="mx-4"
        dense
        flat
        hide-no-data
        hide-details
        label="Pesquisar"
        placeholder="Pesquisar"
        solo
        rounded
        prepend-inner-icon="mdi-magnify"
        append-icon=""
        color="yt_black"
        outlined
        :clearable="true"
        :auto-select-first="true"
      ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined rounded color="yt_blue"
        ><v-icon class="mr-2">mdi-account-circle-outline</v-icon> Fazer login
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: ["teste 1", "teste 2", "teste 3"],
      select: '',
      search: '',
      loading: false
    }
  },
  watch: {
    search() {
      if(this.search != '') {
        this.items.unshift(this.search)
      }
    }
  },
  methods: {
    clearSearch() {
      const itens =  ["teste 1", "teste 2", "teste 3"]
      this.items = itens
    },
    goToResults() {
      this.$router.push({name: 'SearchResult', query: { search_query: this.select } })
    }
  }
};
</script>
