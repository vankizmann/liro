module.exports = {

    name: 'list',
    namespaced: true,

    state: new List,

    getters: {

        get(state) {
            return state.list;
        },

        order(state) {
            return state.order;
        },

        direction(state) {
            return state.direction;
        },

        search(state) {
            return state.search;
        },

        searchable(state) {
            return state.searchable;
        },

        filter(state) {
            return state.filter;
        },

        filterable(state) {
            return state.filterable;
        }

    },

    mutations: {

        init(state, data) {
            state.init(data);
        },

        order(state, data) {
            state.orderBy(data[0], data[1]);
        },

        search(state, data) {
            state.searchBy(data[0], data[1]);
        },

        filter(state, data) {
            state.filterBy(data[0], data[1]);
        }

    }

}
liro.store(module.exports);
