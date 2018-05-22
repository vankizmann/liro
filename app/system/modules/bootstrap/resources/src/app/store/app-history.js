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
            state.init(data)
        },
        save(state, data) {
            state.save(data)
        }
    }

}
liro.store(module.exports);
