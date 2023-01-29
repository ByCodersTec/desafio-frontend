import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)

export default new Vuex.Store({
  state: {
    search: '',
    searchHistory: Vue.$cookies.get('searchHistory') != undefined ? Vue.$cookies.get('searchHistory') : [],
    watchedVideos: Vue.$cookies.get('history') != undefined ? Vue.$cookies.get('history') : [],
    isMobile: false
  },
  mutations: {
    SET_SEARCH_PARAMS(state, value) {
      state.search = value
    },
    SET_SEARCH_HISTORY_PARAMS(state, value) {
      state.searchHistory.unshift(value)
      const history = JSON.stringify(state.searchHistory)
      Vue.$cookies.set('searchHistory', history);
    },
    SET_MOBILE_SCREEN(state, value) {
      state.isMobile = value
    },
    SET_VIDEOS_WATCHED_HISTORY(state, value) {
      state.watchedVideos.unshift(value)
      const history = JSON.stringify(state.watchedVideos)
      Vue.$cookies.set('history', history);
    }
  },
  actions: {
    setSearch({commit}, search) {
      commit('SET_SEARCH_PARAMS', search)
    },
    setSearchHistory({commit}, search) {
      commit('SET_SEARCH_HISTORY_PARAMS', search)
    },
    setIsMobile({commit}, value) {
      commit('SET_MOBILE_SCREEN', value)
    },
    setWatchedHistory({commit}, value) {
      commit('SET_VIDEOS_WATCHED_HISTORY', value)
    }
  },
  modules: {
  }
})
