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

}
