import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)

export default new Vuex.Store({
  state: {
    search: '',
    searchHistory: Vue.$cookies.get('searchHistory') != undefined ? Vue.$cookies.get('searchHistory') : []
  },
  mutations: {
    SET_SEARCH_PARAMS(state, value) {
      state.search = value
    },
    SET_SEARCH_HISTORY_PARAMS(state, value) {
      state.searchHistory.unshift(value)
      const history = JSON.stringify(state.searchHistory)
      Vue.$cookies.set('searchHistory', history);
    }
  },
  actions: {
    setSearch({commit}, search) {
      commit('SET_SEARCH_PARAMS', search)
    },
    setSearchHistory({commit}, search) {
      commit('SET_SEARCH_HISTORY_PARAMS', search)
    }
  },
  modules: {
  }
})
