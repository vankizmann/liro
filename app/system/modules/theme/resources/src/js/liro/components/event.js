export default function () {

    /**
     * Events
     */

    this.events = [];

    /**
     * Watch function
     */

    this.$watch = this.watch = function (name, callback) {
        this.events.push({ name, callback });
    }.bind(this);

    /**
     * Emit function
     */

    this.$emit = this.emit = function (name, args) {
        
        var events = _.filter(this.events, { name: name });
        
        _.each(events, (event) => {
            event.callback.apply(this, arguments);
        });
    }.bind(this);

}
