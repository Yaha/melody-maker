import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetching: false
  },
  mutations: {
    setFetching (state, value) {
      state.fetching = value
    }
  },
  actions: {
    setFetching ({ commit }, obj) {
      commit('setFetching', obj)
    }
  }
})
