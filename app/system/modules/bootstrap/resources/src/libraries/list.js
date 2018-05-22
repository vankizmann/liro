export default () => {

    var cookie = Cookie.get('list');

    var objectify = function(options) {

        if ( !options ) {
            return {};
        }

        // Split options
        options = _.map(options.split('/'), (option) => option.split(':'));

        // Decrypt query
        options = _.mapValues(_.fromPairs(options), (option) => QueryString.parse(option));

        return options;
    }

    var stringify = function(options) {

        if ( !options ) {
            return '';
        }

        // Stringify values
        options = _.mapValues(options, (option) => QueryString.stringify(option));

        // Glue options
        options = _.reduce(options, (base, value, key) => { base.push(key + ':' + value); return base; }, []);

        return options.join('/');
    }

    var options = {

        sort: {
            column: 'id',
            direction: 'desc'
        },

        search: {
            query: '',
            columns: []
        },

        filter: {
            
        },

        pagination: {
            page: 1,
            pages: 1,
            limit: 25
        }

    }

    var query = QueryString.parse(cookie);

    query.filter = _.mapValues(query.filter, (value) => _.map(value, (value) => parseInt(value)));

    this.options = _.merge(options, query);

    this.baseList = [];
    this.list = [];

    this._build = function() {

        var items = _.clone(this.baseList);

        items = this._search(items) || items;
        items = this._filter(items) || items;
        items = this._order(items) || items;
        items = this._paginate(items) || items;

        Cookie.set('list', QueryString.stringify(this.options, { encode: false }), { path: '/' + window.location.pathname.substr(1) });

        this.list = items;
    }

    this.init = function(list) {
        this.baseList = list;
        this._build();
    }

    this._order = function(items) {

        if ( this.options.sort.column == '' ) {
            return;
        }

        items = _.orderBy(items, this.options.sort.column, this.options.sort.direction);

        return items;
    }

    this.orderBy = function(column, direction) {
        this.options.sort.column = column;
        this.options.sort.direction = direction;
        this._build();
    }

    this._search = function(items) {

        if ( this.options.search.query == '' ) {
            return;
        }

        var search = new Search(items, this.options.search.columns);

        items = search.search(this.options.search.query);

        return items;
    }

    this.searchBy = function(query, columns) {
        this.options.search.query = query;
        this.options.search.columns = columns;
        this._build();
    }

    this._filter = function(items) {

        if ( this.options.filter.length ) {
            return;
        }

        _.each(this.options.filter, (values, column) => {

            if (values.length == 0) {
                return;
            }

            items = _.filter(items, (item) => {

                if (typeof item[column] == 'object') {
                    return _.intersection(item[column], values).length;
                }
                
                return _.includes(values, item[column]);
            });

        });

        return items;
    }

    this.filterBy = function(column, values) {
        this.options.filter[column] = values;
        this._build();
    }

    this._paginate = function(items) {

        this.options.pagination.pages = Math.ceil(items.length / this.options.pagination.limit);
        
        if ( this.options.pagination.pages == 1 ) {
            return;
        }

        items = _.slice(items, (this.options.pagination.page - 1) * this.options.pagination.limit, this.options.pagination.page * this.options.pagination.limit);

        return items;
    }

    this.paginateBy = function(page, limit) {
        this.options.pagination.page = page;
        this.options.pagination.limit = limit;
        this._build();
    }

    return this;
}
