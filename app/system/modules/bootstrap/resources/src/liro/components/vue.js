module.exports = function () {

    /**
     * Store
     */

    this.store = {};

    /**
     * Set store function
     */

    this.$set = function(key, value) {
        this.store[key] = value;
    }.bind(this);

    /**
     * Components
     */

    this.components = {};

    /**
     * Set store function
     */

    this.$component = function(name, options) {
        this.components[name] = options;
    }.bind(this);

    /**
     * Filters
     */

    this.filters = {};

    /**
     * Set filter function
     */

    this.$filter = function(name, options) {
        this.filters[name] = options;
    }.bind(this);

}
