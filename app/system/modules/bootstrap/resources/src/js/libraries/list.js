export default () => {

    this.baseList = [];

    this.list = [];

    this._build = function() {
        var list = _.clone(this.baseList);

        list = this._search(list) || list;
        list = this._order(list) || list;

        this.list = list;
    }

    this.init = function(list) {
        this.baseList = list;
        this._build();
    }

    this.order = 'id';
    this.direction = 'desc';

    this._order = function(list) {
        if ( this.order == '' ) return;
        return _.orderBy(list, this.order, this.direction);
    }

    this.orderBy = function(order, direction) {
        this.order = order;
        this.direction = direction;
        this._build();
    }

    this.search = '';
    this.searchable = [];

    this._search = function(list) {
        if ( this.search == '' ) return;
        return new Search(list, this.searchable).search(this.search);
    }

    this.searchBy = function(search, searchable) {
        this.search = search;
        this.searchable = searchable;
        this._build();
    }

    this.filter = {};

    this._filter = function(list) {
        _.filter(list, (item) => {
            
        });
    }

    this.filterBy = function(filter, filterable) {
        this.filter[filter] = filterable;
        this._build();
    }

    return this;
}
