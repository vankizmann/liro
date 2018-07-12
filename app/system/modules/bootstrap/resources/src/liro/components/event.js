module.exports = function () {

    /**
     * Events
     */

    this.events = collect([]);

    /**
     * Watch function
     */

    this.$watch = this.watch = function(name, callback) {
        this.events.push({
            name, callback
        });
    }.bind(this);

    /**
     * Watch function
     */

    this.$once = this.once = function(name, callback) {
        if ( this.events.where('name', name).count() == 0 ) this.events.push({
            name, callback
        });
    }.bind(this);

    /**
     * Emit function
     */

    this.$emit = this.emit = function(name, args) {
        this.events.where('name', name).map((event) => {
            event.callback.apply(this, arguments);
        });
    }.bind(this);

}
