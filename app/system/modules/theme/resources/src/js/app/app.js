
import VuePortal from 'portal-vue';
Vue.use(VuePortal);

import { Container as VueContainer } from "vue-smooth-dnd";
import { Draggable as VueDraggable } from "vue-smooth-dnd";

import VueNestable from 'vue-nestable';
Vue.use(VueNestable);

import VueShortkey from 'vue-shortkey';
Vue.use(VueShortkey);

import ScopedSlotsPolyfill from 'vue-nestable/lib/scoped-slots-polyfill';
Vue.use(ScopedSlotsPolyfill);

import VueReady from './plugins/ready';
Vue.use(VueReady);

require('./components/list');

require('./components/form/input');
require('./components/form/textarea');
require('./components/form/select');
require('./components/form/switch');

require('./components/list/search');
require('./components/list/sort');
require('./components/list/filter');
require('./components/list/switch');
require('./components/list/pagination');

Vue.ready(function () {

    Vue.prototype.Liro = Liro;
    Vue.prototype.Axios = Axios;
    Vue.prototype.UIkit = UIkit;

    Vue.component('app-container', VueContainer);
    Vue.component('app-draggable', VueDraggable);

    Liro.vue.filters.map(function (filter) {
        Vue.filter(filter.name, filter.options);
    });

    Liro.vue.directives.map(function (directive) {
        Vue.directive(directive.name, directive.options);
    });

    Liro.vue.components.map(function (component) {
        Vue.component(component.name, component.options);
    });

    Liro.events.watch('axios.error', function (event, res) {

        if ( res.data.errors != undefined ) {
            return _.each(res.data.errors, error => UIkit.notification(error, 'danger'));
        }

        if ( res.data.message != undefined ) {
            return UIkit.notification(res.data.message, 'danger');
        }

        return UIkit.notification('Unexpected error, please contact support.', 'danger');
    });

    new Vue({}).$mount('#app');
});