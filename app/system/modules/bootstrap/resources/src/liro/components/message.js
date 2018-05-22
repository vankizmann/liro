module.exports = function () {

    /**
     * Messages
     */

    this.messages = {};

    /**
     * Set messages function
     */

    this.$set = function(messages, locale) {

        if (locale == null || locale == undefined) {
            locale = window.liro.locale.$get();
        }

        this.messages[locale] = messages;

    }.bind(this);

    /**
     * Get messages function
     */

    this.$get = function() {
        return this.messages;
    }.bind(this);

}
