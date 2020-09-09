import Vue from 'vue/dist/vue.common'
import Vuex from 'vuex/dist/vuex.common'

Vue.use(Vuex)

export const getStore = (stateExtender = {}) => {
    return new Vuex.Store({
        state: {
            count: 0,
            ...stateExtender
        },
        mutations: {
            increment: state => state.count++,
            decrement: state => state.count--
        }
    })
}
