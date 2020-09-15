import Vue from 'vue/dist/vue.common'
import Vuex from 'vuex/dist/vuex.common'

Vue.use(Vuex)

/**
 * The state object of the vuex instance
 */
const state = {
  count: 0
}

/**
 * The mutations object which contains all the mutations methods of the vuex instance
 */
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}

export const store = new Vuex.Store({
  state,
  mutations
})
