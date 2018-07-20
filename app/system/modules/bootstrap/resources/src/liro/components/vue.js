var History = require('../libraries/history.js');

module.exports = function () {

    /**
     * Store
     */

    this.stores = {};

    /**
     * Set store function
     */

    this.$store = this.store = function(key, value) {
        this.stores[key] = value;
    }.bind(this);

    /**
     * Components
     */

    this.components = {};

    /**
     * Set store function
     */

    this.$component = this.component = function(name, options) {
        this.components[name] = options;
    }.bind(this);

    /**
     * Filters
     */

    this.filters = {};

    /**
     * Set filter function
     */

    this.$filter = this.filter = function(name, options) {
        this.filters[name] = options;
    }.bind(this);

}
