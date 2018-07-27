module.exports = function () {

    /**
     * Data
     */

    this.routes = window.$routes || {};

    /**
     * Init routes function
     */

    this.$init = this.init = function(value) {
        this.routes = value;
    }.bind(this);

    /**
     * Set routes function
     */

    this.$set = this.set = function(key, value) {
        this.routes[key] = value;
    }.bind(this);

    /**
     * Get routes function
     */

    this.$get = this.get = function(key, fallback) {
        return this.routes[key] || fallback;
    }.bind(this);

}
