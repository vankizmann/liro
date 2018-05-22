var History = require('../libraries/history.js');

module.exports = function () {

    /**
     * Store
     */

    this.stores = {};

    /**
     * Set store function
     */

    this.$store = function(key, value) {
        this.stores[key] = value;
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

    /**
     * Set filter function
     */

    this.$history = function(instance, key) {

        if (!key) {
            key = 'value';
        }

        instance._history = new History((value) => instance[key] = value);

        if (typeof instance.canUndo != 'undefined') {
            instance._history.changeCanUndo = (value) => instance.canUndo = value;
        }

        if (typeof instance.canRedo != 'undefined') {
            instance._history.changeCanRedo = (value) => instance.canRedo = value;
        }

        instance.$watch(key, _.debounce(() => instance._history.save(instance[key]), 600), { deep: true });

        return instance;
    }

}
