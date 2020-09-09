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

/**
 * Gets the store with, if wanted an extended state by passed
 * params
 *
 * @param stateExtender, to extend the state with variables which are only available on runtime
 * @returns {Store}
 */
export const getStore = (stateExtender = {}) => {
    return new Vuex.Store({
        state: Object.assign(state, stateExtender),
        mutations: mutations
    })
}
