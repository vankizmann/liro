module.exports = {

    namespaced: true,

    state: new liro.history,

    getters: {
        get(state) {
            return state;
        },
        canUndo(state) {
            return state.canUndo();
        },
        canRedo(state) {
            return state.canRedo();
        }
    },

    mutations: {
        init(state, data) {
            state.init(data)
        },
        save(state, data) {
            state.save(data)
        }
    }

}
liro.vue.$store('history', module.exports);
