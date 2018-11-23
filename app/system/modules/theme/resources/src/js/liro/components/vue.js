export default function () {

    /**
     * Components
     */

    this.components = [];

    /**
     * Set store function
     */

    this.$component = this.component = function(name, options) {
        this.components.push({ name, options });
    }.bind(this);

    /**
     * Filters
     */

    this.filters = [];

    /**
     * Set filter function
     */

    this.$filter = this.filter = function(name, options) {
        this.filters.push({ name, options });
    }.bind(this);

    /**
     * Filters
     */

    this.directives = [];

    /**
     * Set filter function
     */

    this.$directive = this.directive = function(name, options) {
        this.directives.push({ name, options });
    }.bind(this);

}
