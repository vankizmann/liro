export default function () {
    
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

    this.$get = this.get = function(key, values, params) {

        var route = key.match(/^https?:\/\//) ? key : this.routes[key] || '';

        _.each(values, (value, key) => {
            route = route.replace(new RegExp('{' + key + '\\?*}', 'g'), value);
        });

        var query = _.flatMap(params || {}, (value, key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });

        return route + (query.length != 0 ? '?' + query.join('&') : '');

    }.bind(this);

    this.redirect = function (key, values, params) {
        window.location.href = this.get(key, values, params);
    }

}
