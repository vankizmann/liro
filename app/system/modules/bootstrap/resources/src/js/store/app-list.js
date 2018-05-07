module.exports = {

    name: 'list',
    namespaced: true,

    state: new List,

    getters: {

        get(state) {
            return state.list;
        },

        order(state) {
            return state.options.sort.column;
        },

        direction(state) {
            return state.options.sort.direction;
        },

        search(state) {
            return state.options.search.query;
        },

        searchable(state) {
            return state.options.search.columns;
        },

        filter(state) {
            return state.options.filter;
        },

        page(state) {
            return state.options.pagination.page;
        },

        pages(state) {
            return state.options.pagination.pages;
        },

        limit(state) {
            return state.options.pagination.limit;
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
        },

        paginate(state, data) {
            state.paginateBy(data.page, data.limit);
        }

    }

}
liro.store(module.exports);
