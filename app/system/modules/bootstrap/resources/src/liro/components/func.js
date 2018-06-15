module.exports = function () {

    /**
     * Watch function
     */

    this.$range = this.range = function(length, start) {
        return _.range(start, length + start);
    }.bind(this);

}
