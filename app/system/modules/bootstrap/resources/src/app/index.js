import Vue from 'vue';
window.Vue = Vue;

import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import PortalVue from 'portal-vue';
import VueDraggable from 'vuedraggable';

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

    Vue.use(Vuex);
    Vue.use(VueI18n);
    Vue.use(VeeValidate);
    Vue.use(PortalVue);

    Vue.prototype.$http = window.axios;
    Vue.prototype.$liro = window.liro;

    // require('./store/app-history.js');
    // require('./store/app-list.js');

    require('./filters/capitalize.js');

    require('./components/toolbar/app-toolbar-event.vue');
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

    var store = new Vuex.Store({
        modules: window.liro.vue.store
    });

    var i18n = new VueI18n({
        locale: window.liro.locale.$get(),
        messages: window.liro.message.$get()
    });

    Vue.ready(function () {

        Vue.component('app-drag', VueDraggable);

        collect(liro.vue.filters).each(function(options, name) {
            Vue.filter(name, options);
        });

        collect(liro.vue.components).each(function(options, name) {
            Vue.component(name, options);
        });

        new Vue({ i18n, store }).$mount('#app');
    });

}

if (window.Vue && window.axios && window.liro) {
    Vue.use(install);
}
