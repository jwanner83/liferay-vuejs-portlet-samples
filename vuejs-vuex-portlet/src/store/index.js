import Vue from 'vue/dist/vue.common'
import Vuex from 'vuex/dist/vuex.common'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})