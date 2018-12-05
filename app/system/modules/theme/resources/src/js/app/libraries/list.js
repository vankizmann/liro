import Storage from 'jsonstorage/storage.js';
import Fuzzy from 'fuzzy-search';

class List {

    /**
     * Default database
     */
    database = 'global-list';

    /**
     * Initial items
     */
    initial = null;

    /**
     * Filtered items
     */
    items = null;

    /**
     * Session storage
     */
    session = null;

    /**
     * Initial config
     */
    config = {};

    constructor (initial, database, callback) {

        if ( initial ) {
            this.initial = initial;
        }

        if ( database ) {
            this.database = database;
        }

        if ( callback ) {
            this.callback = callback;
        }

        this.session = Storage.select(this.database, 'session');

        this.getSearchData();
        this.getOrderData();
        this.getFilterData();
        this.getPaginateData();
        this.getSelectData();

        console.log(this.session.data)

        this.filterItems();
    }

    callback () {
        console.log('Items updated!');
    }

    getSessionData (scope, values) {

        _.each(values, (value, key) => {
            _.set(scope, key, this.session.get(key, value));
        });

        return scope;
    }

    setSessionData (scope, values) {

        _.each(values, (value, key) => {
            this.session.set(key, value); _.set(scope, key, value);
        });

        return this.getSessionData(scope, values);
    }

    getSearchData () {
        return this.config.search || this.getSessionData(this.config, {
            'search.query': '', 'search.column': []
        });
    }

    setSearchData (query, columns) {

        this.setSessionData(this.config, {
            'search.query': query, 'search.columns': columns
        });

        return this.filterItems();
    }

    getOrderData () {
        return this.config.order || this.getSessionData(this.config, {
            'order.column': 'id', 'order.direction': 'asc'
        });
    }

    setOrderData (column, direction) {

        this.setSessionData(this.config, {
            'order.column': column, 'order.direction': direction
        });

        return this.filterItems();
    }

    getFilterData () {
        return this.config.filter || this.getSessionData(this.config, {
            'filter.filters': {}
        });
    }

    setFilterData (column, values) {

        this.setSessionData(this.config, {
            'filter.filters': _.set(this.config.filter.filters, column, values)
        });

        return this.filterItems();
    }

    getPaginateData () {
        return this.config.paginate || this.getSessionData(this.config, {
            'paginate.page': 1, 'paginate.limit': 25, 'paginate.pages': 1
        });
    }

    setPaginateData (page, limit) {

        this.setSessionData(this.config, {
            'paginate.page': page, 'paginate.limit': limit
        });

        return this.filterItems();
    }

    getSelectData () {
        return this.config.select || this.getSessionData(this.config, {
            'select.all': false, 'select.selected': []
        });
    }

    setSelectData (selected) {

        this.setSessionData(this.config, {
            'select.selected': [selected]
        });

        return this.filterItems();
    }

    filterItemsByOrder (items) {
        return _.orderBy(items, this.config.order.column, this.config.order.direction);
    }

    filterItemsBySearch (items) {

        if ( this.config.search.query == '' ) {
            return items;
        }

        return new Fuzzy(items, this.config.search.columns).search(this.config.search.query);
    }

    filterItemsByFilter (items) {

        _.each(this.config.filter.filters, (values, column) => {
            if ( values.length ) items = _.filter(items, (item) => {
                return _.isArray(item[column]) ? _.intersection(item[column], values).length : _.includes(values, item[column]);
            });
        });

        return items;
    }

    filterItemsByPaginate (items) {

        var config = this.config.paginate;

        this.setSessionData(this.config, {
            'paginate.pages': Math.ceil(items.length / config.limit) || 1
        });

        return _.slice(items, (config.page - 1) * config.limit, config.page * config.limit);
    }

    filterItems () {

        var items = this.initial;

        items = this.filterItemsByOrder(items);
        items = this.filterItemsBySearch(items);
        items = this.filterItemsByFilter(items);
        items = this.filterItemsByPaginate(items);

        this.items = items;

        return this.callback(this);
    }

    getMethods () {
        return {
            order: this.setOrderData.bind(this),
            search: this.setSearchData.bind(this),
            filter: this.setFilterData.bind(this),
            paginate: this.setPaginateData.bind(this),
            select: this.setSelectData.bind(this)
        };
    }

    getData () {
        return {
            items: this.items, config: this.config, methods: this.getMethods()
        };
    }

}

// List.prototype.update = function () {
//     // Empty update function
// }

// // Search function
// List.prototype.search = function (query, columns) {

//     this.storage.set('search_query', query);
//     this.storage.set('search_columns', columns);

//     Liro.events.emit(this.database + '@update', this);

//     return this.getSearchData();
// }

// // Get search data
// List.prototype.getSearchData = function () {
//     return {
//         query: this.storage.get('search_query', ''),
//         columns: this.storage.get('search_columns', [])
//     };
// }

// Filter items by search
List.prototype.searchFunction = function (items) {

    var attr = this.getSearchData();

    if ( attr.query == '' && attr.columns.length == 0 ) {
        return items;
    }

    var fuzzy = new Fuzzy(items, attr.columns);

    return fuzzy.search(attr.query);
}

// // Order function
// List.prototype.order = function (column, direction) {

//     this.storage.set('order_column', column);
//     this.storage.set('order_direction', direction);

//     Liro.events.emit(this.database + '@update', this);

//     return this.getOrderData();
// }

// // Get order data
// List.prototype.getOrderData = function () {
//     return {
//         column: this.storage.get('order_column', 'id'),
//         direction: this.storage.get('order_direction', 'desc')
//     };
// }

// // Filter items by order
List.prototype.orderFunction = function (items) {
    var attr = this.getOrderData();
    return _.orderBy(items, attr.column, attr.direction);
}

List.prototype.filter = function (column, values) {

    var filters = this.storage.get('filter_filters', {});

    filters[column] = values;

    this.storage.set('filter_filters', filters);

    Liro.events.emit(this.database + '@update', this);

    return this.getFilterData();
}

// List.prototype.getFilterData = function () {
//     return this.storage.get('filter_filters', {});
// }

List.prototype.filterFunction = function (items) {

    var attr = this.getFilterData();

    _.each(attr, (values, column) => {

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

// List.prototype.paginate = function (page, limit) {

//     this.storage.set('paginate_page', page);
//     this.storage.set('paginate_limit', limit);

//     Liro.events.emit(this.database + '@update', this);

//     return this.getPaginateData();
// }

// List.prototype.getPaginateData = function () {

//     return {
//         page: this.storage.get('paginate_page', 1),
//         limit: this.storage.get('paginate_limit', 25)
//     };

// }

List.prototype.paginateFunction = function (items) {

    var attr = this.getPaginateData();

    this.pages = Math.ceil(items.length / attr.limit);

    if ( this.pages == 1 ) {
        return items;
    }

    return _.slice(items, (attr.page - 1) * attr.limit, attr.page * attr.limit);
}

// List.prototype.select = function (value) {

//     this.temporary.selected = _.xor(this.temporary.selected, [value]);

//     Liro.events.emit(this.database + '@update', this);

//     return this.temporary.selected;
// }

// List.prototype.getSelectData = function () {
//     return this.temporary.selected;
// }

// List.prototype.getItems = function () {

//     var items = this.initial;

//     items = this.orderFunction(items);
//     items = this.searchFunction(items);
//     items = this.filterFunction(items);
//     items = this.paginateFunction(items);

//     return this.items = items;
// }

// List.prototype.getPages = function () {
//     return this.pages;
// }

export default List;