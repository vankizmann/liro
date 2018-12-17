export default function () {

    /**
     * Data
     */

    this.messages = window.$messages || {};

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

    this.$get = this.get = function(key, values) {

        var message = _.get(this.messages, key, key);

        _.each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    }.bind(this);

    this.$choice = this.choice = function(key, count, values) {

        var messages = _.get(this.messages, key, key).split('|');

        if ( messages.length == 1 ) {
            var message = messages[0];
        }

        if ( messages.length == 2 && count == 1 ) {
            var message = messages[0];
        }

        if ( messages.length == 2 && count != 1 ) {
            var message = messages[1];
        }

        if ( messages.length == 3 && count == 0 ) {
            var message = messages[0];
        }

        if ( messages.length == 3 && count == 1 ) {
            var message = messages[1];
        }

        if ( messages.length == 3 && count != 0 && count != 1 ) {
            var message = messages[2];
        }

        values = _.merge({ count: count }, values || {}); 

        _.each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    }.bind(this);

}
