/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

import Vue from 'vue';
window.Vue = Vue;

/**
 * 
 */

import i18n from 'vue-i18n';
window.i18n = i18n;

/**
 * 
 */

import Vuex from 'vuex';
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate';

/**
 * 
 */

import VeeValidateDE from 'vee-validate/dist/locale/de';
import VeeValidateEN from 'vee-validate/dist/locale/en';
import VeeValidateFR from 'vee-validate/dist/locale/fr';
import VeeValidateRU from 'vee-validate/dist/locale/ru';

liro.listen('document.ready', function() {

    Vue.use(Vuex);
    Vue.use(Vue2Filters);
    Vue.use(VeeValidate);

    window.Store = new Vuex.Store({
        // Vuex configuration
    });

    // Trigger before init via liro listiner
    liro.trigger('app.beforeInit');

    // Set default http class
    Vue.prototype.$http = window.axios;
    Vue.prototype.$liro = window.liro;

    const App = new Vue({

        store: Store,
        i18n: liro.getTranslator(),

        data() {
            return {
                locale: liro.getLocale(),
                notificationDelay: 5000
            }
        },

        beforeCreate() {
            liro.trigger('app.beforeCreate', this);
        },

        created() {
            liro.trigger('app.created', this);
        },

        beforeMount() {
            liro.trigger('app.beforeMount', this);
        },

        mounted() {

            switch(this.locale) {
                case 'en':
                this.$validator.localize(this.locale, VeeValidateEN);
                break;
                case 'de':
                this.$validator.localize(this.locale, VeeValidateDE);
                break;
                case 'fr':
                this.$validator.localize(this.locale, VeeValidateFR);
                break;
                case 'ru':
                this.$validator.localize(this.locale, VeeValidateRU);
                break;
            }

            liro.trigger('app.mounted', this);
        },

        methods: {

            httpSuccess(success) {

                if ( success.data.redirect ) {
                    setTimeout(() => {
                        window.location.replace(success.data.redirect)
                    }, 2500);
                }

                UIkit.notification(success.data.message, 'success');
            },

            httpError(error) {
                UIkit.notification(error.message, 'danger');
            }

        }

    }).$mount('#app');

    // Trigger after init via liro listiner
    liro.trigger('app.afterInit');

});

$(document).ready(function() {
    liro.trigger('document.ready');
});
