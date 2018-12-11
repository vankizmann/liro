
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

import VueSync from './plugins/sync';
Vue.use(VueSync);

require('./directives/confirm');

require('./filters/filter');

require('./components/default/label');
require('./components/default/input');
require('./components/default/textarea');
require('./components/default/checkbox');
require('./components/default/select');
require('./components/default/select-option');
require('./components/default/select-group');

require('./components/list');

require('./components/form/input');
require('./components/form/textarea');
require('./components/form/switch');
require('./components/form/select-single');
require('./components/form/select-multiple');

require('./components/list/search');
require('./components/list/sort');
require('./components/list/filter');
require('./components/list/switch');
require('./components/list/pagination');
require('./components/list/select');
require('./components/list/select-all');

Vue.ready(function () {

    UIkit.modal.labels.ok = Liro.messages.get('theme::form.modal.ok');
    UIkit.modal.labels.cancel = Liro.messages.get('theme::form.modal.cancel');

    Vue.prototype.Liro = Liro;
    Vue.prototype.Axios = Axios;
    Vue.prototype.UIkit = UIkit;

    Vue.prototype.trans = Liro.messages.get;
    Vue.prototype.route = Liro.routes.get;

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

    Liro.vue.apis.map(function (api) {
        Vue.sync(api.name, api.options);
    });

    Liro.events.watch('axios.error', function (event, res) {

        if ( res.data.errors != undefined ) {
            return _.each(res.data.errors, 
                errors => _.each(errors, error => UIkit.notification(error, 'danger'))
            );
        }

        if ( res.data.message != undefined ) {
            return UIkit.notification(res.data.message, 'danger');
        }

        return UIkit.notification('Unexpected error, please contact support.', 'danger');
    });

    window.App = new Vue({
        data: function () {
            return _.merge(Liro.data.all(), Liro.vue.data());
        }
    }).$mount('#app');
});