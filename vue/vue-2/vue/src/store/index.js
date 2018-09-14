import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        price: 22
    },
    mutations: {
        'ADD_COUNT'(state) {
            state.count++
        },
        'REDUCE_COUNT'(state) {
            state.count--
        },
        'CHANGE_COUNT'(state, payload) {
            state.count = payload
        }
    },
    actions: {
        handleAsyncActions(store, payload) {
            setTimeout(() => {
                store.commit('CHANGE_COUNT', payload)
            },1000)
        }
    }
})

export default store;