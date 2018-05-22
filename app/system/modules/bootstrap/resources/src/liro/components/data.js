module.exports = function () {

    /**
     * Data
     */

    this.data = window.$data || {};

    /**
     * Set locale function
     */

    this.$set = function(key, value) {
        this.data[key] = value;
    }.bind(this);

    /**
     * Get locale function
     */

    this.$get = function(key, fallback) {
        return this.data[key] || fallback;
    }.bind(this);

}
