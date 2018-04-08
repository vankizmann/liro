export default function() {

    /**
     * Locale storage
     */

    this.locale = 'en';

    /**
     * Set locale function
     */

    const setLocale = function(locale) {
        this.locale = locale;
    }.bind(this);

    /**
     * Get locale function
     */

    const getLocale = function() {
        return this.locale;
    }.bind(this);

    /**
     * Messages storage
     */

    this.messages = {};

    /**
     * Set messages function
     */

    const setMessages = function(locale, messages) {
        typeof this.messages[locale] == 'undefined' ?  this.messages[locale] = messages : Object.assign(this.messages[locale], messages);
    }.bind(this);

    /**
     * Get messages function
     */

    const getMessages = function() {
        return this.messages;
    }.bind(this);

    /**
     * Translator storage
     */

    this.translator = undefined

    /**
     * Get translator function
     */

    const getTranslator = function() {
        return this.translator || new window.i18n({ 
            locale: getLocale(), messages: getMessages()
        });
    }.bind(this);

    /**
     * Events storage
     */

    this.events = collect([]);

    /**
     * Listen function
     */

    const listen = function(name, callback) {
        this.events.push({
            name, callback
        });
    }.bind(this);

    /**
     * Trigger function
     */

    const trigger = function(name, args) {
        this.events.where('name', name).map((event) => {
            event.callback.apply(this, arguments);
        });
    }.bind(this);

    /**
     * Component function
     */

    const component = function(component) {
        this.events.push({
            name: 'app.beforeInit', callback: () => Vue.component(component.name, component)
        });
    }.bind(this);

    return {
        data: {}, listen, trigger, component, setLocale, getLocale, setMessages, getMessages, getTranslator
    }
}