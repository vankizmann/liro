module.exports = function () {

    /**
     * Locale
     */

    this.locale = document.documentElement.lang || 'en';

    /**
     * Set locale function
     */

    this.$set = this.set = function(locale) {
        this.locale = locale;
    }.bind(this);

    /**
     * Get locale function
     */

    this.$get = this.get = function() {
        return this.locale;
    }.bind(this);

}
