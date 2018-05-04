module.exports = {

    name: 'list',
    namespaced: true,

    state: {

        cookie: '',
        
        list: [],
        filter: [],

        search: '',
        search_column: '',

        direction: 'desc',
        direction_column: ''

    },

    getters: {

        list(state) {
            return state.list;
        },

        filter(state) {
            return state.filter;
        },

        search(state) {
            return state.search;
        },

        search_column(state) {
            return state.search_column;
        },

        direction(state) {
            return state.direction;
        },

        direction_column(state) {
            return state.direction_column;
        }

    },

    mutations: {

        init(state, data) {
            state.list = state.filter = data;
        },

        search(state, search) {
            if ( _.isArray(search) ) {
                state.search = search[0];
                state.search_column = search[1].split(',')
            } else {
                state.search = search;
            }
        },

        search_column(state, search_column) {
            state.search_column = search_column.split(',');
        },

        direction(state, direction) {
            if ( _.isArray(direction) ) {
                state.direction = direction[0];
                state.direction_column = direction[1].split(',');
            } else {
                state.direction = direction;
            }
        },

        direction_column(state, direction_column) {
            state.direction_column = direction_column.split(',');
        }

    },

    actions: {

        filter({ state }) {

            var filter = _.cloneDeep(state.list);

            if ( state.direction != '' && state.direction_column.length != 0 ) {
                filter = _.orderBy(filter , state.direction_column, state.direction);
            }

            if ( state.search != '' && state.search_columns != 0 ) {
                filter = _.filter(filter, (item) => {
                    var values = _.values(_.pick(item, state.search_column)).join(' ');
                    return _.includes(values.toLowerCase(), state.search.toLowerCase());
                });
            }

            state.filter = filter;
        }

    }

}
liro.store(module.exports);
