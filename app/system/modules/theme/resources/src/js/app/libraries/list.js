import Storage from 'jsonstorage/storage.js';
import Fuzzy from 'fuzzy-search';

function List (initial, database) {

    this.storage = Storage.select(database || 'global-list', 'session');
    this.initial = this.items = initial || [];

    this.pages = 1;
    this.checked = [];

}

List.prototype.search = function (query, columns) {

    this.storage.set('search_query', query);
    this.storage.set('search_columns', columns);

    return this.searchData();
}

List.prototype.searchData = function () {

    return {
        query: this.storage.get('search_query', ''),
        columns: this.storage.get('search_columns', [])
    };

}

List.prototype.searchFunction = function (items) {

    var attr = this.searchData();

    if ( attr.query == '' && attr.columns.length == 0 ) {
        return items;
    }

    var search = new Fuzzy(items, attr.columns);

    return search.search(attr.query);
}

List.prototype.order = function (column, direction) {

    this.storage.set('order_column', column);
    this.storage.set('order_direction', direction);

    return this.orderData();
}

List.prototype.orderData = function () {

    return {
        column: this.storage.get('order_column', 'id'),
        direction: this.storage.get('order_direction', 'desc')
    };

}

List.prototype.orderFunction = function (items) {

    var attr = this.orderData();

    return _.orderBy(items, attr.column, attr.direction);
}

List.prototype.filter = function (column, values) {

    var filters = this.storage.get('filter_filters', {});

    filters[column] = values;

    this.storage.set('filter_filters', filters);

    return this.filterData();
}

List.prototype.filterData = function () {

    return this.storage.get('filter_filters', {});

}

List.prototype.filterFunction = function (items) {

    var attr = this.filterData();

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

List.prototype.paginate = function (page, limit) {

    this.storage.set('paginate_page', page);
    this.storage.set('paginate_limit', limit);

    return this.paginateData();
}

List.prototype.paginateData = function () {

    return {
        page: this.storage.get('paginate_page', 1),
        limit: this.storage.get('paginate_limit', 25)
    };

}

List.prototype.paginateFunction = function (items) {

    var attr = this.paginateData();

    this.pages = Math.ceil(items.length / attr.limit);

    if ( this.pages == 1 ) {
        return items;
    }

    return _.slice(items, (attr.page - 1) * attr.limit, attr.page * attr.limit);
}

List.prototype.getItems = function () {

    var items = this.initial;

    items = this.orderFunction(items);
    items = this.searchFunction(items);
    items = this.filterFunction(items);
    items = this.paginateFunction(items);

    return this.items = items;
}

List.prototype.getPages = function () {
    return this.pages;
}

List.prototype.check = function (value) {
    this.checked = _.xor(this.checked, [value]);
    return this.checked;
}

List.prototype.checkData = function () {
    return this.checked;
}

export default List;