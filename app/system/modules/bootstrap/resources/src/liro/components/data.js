module.exports = function () {

    /**
     * Data
     */

    this.data = window.$data || {};

    /**
     * Init data function
     */

    this.$init = this.init = function(value) {
        this.data = value;
    }.bind(this);

    /**
     * Set data function
     */

    this.$set = this.set = function(key, value) {
        this.data[key] = value;
    }.bind(this);

    /**
     * Get data function
     */

    this.$get = this.get = function(key, fallback) {
        return this.data[key] || fallback;
    }.bind(this);

}
