module.exports = {

    name: 'list',
    namespaced: true,

    state: {

        cookie: '',
        
        list: [],
        filter: [],

        search: '',
        search_column: [],

        direction: 'desc',
        direction_column: '',

        check: [],
        check_column: ''

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
        },

        check(state) {
            return state.check;
        },

        check_column(state) {
            return state.check_column;
        }

    },

    mutations: {

        init(state, data) {
            state.list = state.filter = data;
        },

        search(state, search) {
            state.search = search;
        },

        search_column(state, search_column) {
            state.search_column = search_column.split(',');
        },

        direction(state, direction) {
            state.direction = direction;
        },

        direction_column(state, direction_column) {
            state.direction_column = direction_column;
        },

        check(state, check) {
            state.check = check;
        },

        check_column(state, check_column) {
            state.check_column = check_column;
        }

    },

    actions: {

        filter({ state }) {

            var filter = _.cloneDeep(state.list);

            if ( state.direction != '' && state.direction_column != '' ) {
                filter = _.orderBy(filter , state.direction_column, state.direction);
            }

            if ( state.check.length != 0 && state.check_column != '' ) {
                filter = _.filter(filter, (item) => {
                    return _.includes(state.check, _.get(item, state.direction_column));
                });
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
