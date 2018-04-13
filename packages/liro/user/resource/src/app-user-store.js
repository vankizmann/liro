module.exports = {

    namespaced: true,

    state: {
        user: {}
    },

    getters: {
        get(state) {
            return state.user;
        }
    },

    mutations: {
        set(store, data) {
            store.user = data;
        }
    }

}