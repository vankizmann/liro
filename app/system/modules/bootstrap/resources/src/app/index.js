import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import VeeValidate, { Validator } from 'vee-validate';
import PortalVue from 'portal-vue';
import VueDraggable from 'vuedraggable';

import VeeValidateDE from 'vee-validate/dist/locale/de';
import VeeValidateEN from 'vee-validate/dist/locale/en';

var ready = function (callback) {

    var ready = document.readyState == 'complete';

    var register = function (callback) {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    }

    var destroy = function (callback) {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    }

    var handler = function () {
        destroy(handler);
        callback();
    };

    return ready ? handler() : register(handler);
}

if (window.Vue) {
    Vue.ready = ready;
}

function install (Vue) {

    var vuedraggable = require('vuedraggable');
    Vue.component('app-drag', vuedraggable);

    Vue.use(Vuex);
    Vue.use(VueI18n);
    Vue.use(VeeValidate);
    Vue.use(PortalVue);

    Vue.prototype.$http = window.axios;
    Vue.prototype.$liro = window.liro;

    Vue.prototype.$notify = UIkit.notification;

    // require('./store/app-history.js');
    // require('./store/app-list.js');

    require('./filters/capitalize.js');

    require('./components/helper/app-helper-history.vue');
    require('./components/helper/app-helper-list.vue');


    require('./components/toolbar/app-toolbar-button.vue');
    require('./components/toolbar/app-toolbar-link.vue');
    require('./components/toolbar/app-toolbar-spacer.vue');

    require('./components/list/app-list-pagination.vue');
    require('./components/list/app-list-filter.vue');
    require('./components/list/app-list-sort.vue');
    require('./components/list/app-list-search.vue');
    require('./components/list/app-list-collapse.vue');
    require('./components/list/app-list-state.vue');
    require('./components/list/app-list-hidden.vue');

    require('./components/form/app-form-input.vue');
    require('./components/form/app-form-password.vue');
    require('./components/form/app-form-select.vue');
    require('./components/form/app-form-select-multiple.vue');

    Vue.ready(function () {

        switch(window.liro.locale.locale) {
            case 'en':
            Validator.localize('en', VeeValidateEN);
            break;
            case 'de':
            Validator.localize('de', VeeValidateDE);
            break;
        }

        collect(liro.vue.filters).each(function(options, name) {
            Vue.filter(name, options);
        });

        collect(liro.vue.components).each(function(options, name) {
            Vue.component(name, options);
        });
    
        var i18n = new VueI18n({
            locale: window.liro.locale.locale,
            messages: window.liro.message.messages
        });

        var store = new Vuex.Store({
            modules: window.liro.vue.stores
        });

        new Vue({ i18n, store }).$mount('#app');
    });

}

if (window.Vue && window.axios && window.liro) {
    Vue.use(install);
}
