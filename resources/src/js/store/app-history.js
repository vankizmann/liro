module.exports = {

    name: 'history',
    namespaced: true,

    state: new Undo,

    getters: {
        get(state) {
            return state;
        },
        canUndo(state) {
            return state.canUndo;
        },
        canRedo(state) {
            return state.canRedo;
        }
    },

    mutations: {
        init(state, data) {
            return state.init(data)
        },
        save(state, data) {
            return state.save(data)
        }
    }

}
liro.store(module.exports);