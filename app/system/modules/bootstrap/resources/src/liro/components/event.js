module.exports = function () {

    /**
     * Events
     */

    this.events = collect([]);

    /**
     * Watch function
     */

    this.$watch = function(name, callback) {
        this.events.push({
            name, callback
        });
    }.bind(this);

    /**
     * Emit function
     */

    this.$emit = function(name, args) {
        this.events.where('name', name).map((event) => {
            event.callback.apply(this, arguments);
        });
    }.bind(this);

}
