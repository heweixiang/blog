import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            value: "aaa"
        }
    },
    getters() {
        getterValue: () => {
            return this.state.value
        }
    },
    mutations() {
        updateValue: (state, newValue) => {
            state.value = newValue
        }
    },
    actions() {
        updateActionValue: (commit, payload) => {
            commit('updateValue', payload)
        }
    }
})

export default store