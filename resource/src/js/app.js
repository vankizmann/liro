import Vue from 'vue';
import Vue2Filters from 'vue2-filters'
import ElementUI from 'element-ui';
import VeeValidate, { Validator } from 'vee-validate';
import i18n from 'vue-i18n';

window.Vue = Vue;
window.i18n = i18n;

import ElementEN from 'element-ui/lib/locale/lang/en';
import ElementDE from 'element-ui/lib/locale/lang/de';

liro.setMessages('en', ElementEN);
liro.setMessages('de', ElementDE);

import VeeValidateDE from 'vee-validate/dist/locale/de';

Validator.localize('de', VeeValidateDE);

liro.listen('document.ready', function() {

    liro.trigger('app.beforeInit', this);

    const App = new Vue({

        i18n: liro.getTranslator(),
        locale: liro.getLocale(),

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
            liro.trigger('app.mounted', this);
        }

    }).$mount('#app');

    liro.trigger('app.afterInit', this);

});

liro.listen('app.beforeInit', function(App) {

    Vue.use(Vue2Filters, {
        // 
    });

    Vue.use(ElementUI, {
        i18n: (key, value) => liro.getTranslator().t(key, value)
    });

    Vue.use(VeeValidate, {
        fieldsBagName: 'veeFields',
        locale: liro.getLocale()
    });

});

$(document).ready(function() {
    liro.trigger('document.ready');
});
