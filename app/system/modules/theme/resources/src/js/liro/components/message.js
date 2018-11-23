export default function () {

    /**
     * Data
     */

    this.messages = window.$messages || {};

    /**
     * Init messages function
     */

    this.$init = this.init = function(value) {
        this.messages = value;
    }.bind(this);

    /**
     * Set messages function
     */

    this.$set = this.set = function(key, value) {
        this.messages[key] = value;
    }.bind(this);

    /**
     * Get messages function
     */

    this.$get = this.get = function(key) {
        return _.get(this.messages, key, key);
    }.bind(this);

}
