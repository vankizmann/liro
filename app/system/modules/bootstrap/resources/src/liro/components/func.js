module.exports = function () {

    /**
     * Watch function
     */

    this.$range = this.range = function(length, start) {
        return _.range(start, length + start);
    }.bind(this);

    /**
     * Watch function
     */

    this.$map = this.map = function(values, key, items) {
        return _.map(values, (value) => _.find(items, [key, value]));
    }.bind(this);

    /**
     * Find function
     */

    this.$find = this.findRecursive = function(item, key, value, childs) {

        if (item[key] == value) {
            return item;
        }

        if (typeof item[childs] == 'object') {
            return _.first(_.map(item[childs], (item) => this.findRecursive(item, key, value, childs)));
        }

    }.bind(this);

}
