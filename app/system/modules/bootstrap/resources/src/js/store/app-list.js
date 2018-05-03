module.exports = {

    name: 'list',
    namespaced: true,

    state: {
        list: [],
        filter: [],
        search: '',
        column: '',
        direction: 'desc'
    },

    getters: {
        list(state) {
            return state.list;
        },
        filter(state) {
            return state.filter;
        },
        column(state) {
            return state.column;
        },
        direction(state) {
            return state.direction;
        }
    },

    mutations: {

        init(state, data) {
            state.list = state.filter = data;
        },

        set(state, options) {
            state.column = options[0];
            state.direction = options[1];
        },
        
        order(state) {

            if ( state.column == '' ) {
                return;
            }

            state.filter = _.orderBy(state.list , state.column, state.direction);
        },

        search(state) {

            if ( state.search == '' ) {
                return;
            }

            state.filter = _.filter(state.list, (item) => {
                _.includes(item[state.column], state.search);
            });
        }

    }

}
liro.store(module.exports);
