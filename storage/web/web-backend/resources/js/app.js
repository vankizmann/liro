import Vue from 'vue';
window.Vue = Vue;

import Nano from "nano-js";
Nano.install(Vue.prototype);

import VueNano from 'nano-ui';
Vue.use(VueNano, {
    checked:        'fa fa-check',
    intermediate:   'fa fa-minus',
    clock:          'fa fa-clock',
    calendar:       'fa fa-calendar',
    times:          'fa fa-times',
    success:        'fa fa-check-circle',
    warning:        'fa fa-exclamation-circle',
    danger:         'fa fa-times-circle',
    info:           'fa fa-info-circle',
    angleUp:        'fa fa-angle-up',
    angleRight:     'fa fa-angle-right',
    angleDown:      'fa fa-angle-down',
    angleLeft:      'fa fa-angle-left',
    create:         'fa fa-plus',
    save:           'fa fa-check',
    delete:         'fa fa-times'
});

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Axios from "axios";
Vue.$http = Vue.prototype.$http = Axios;

require('./config/axios');

require('./component/menu/index');
require('./component/helper/index');

Nano.Dom.ready(() => {

    let options = {};

    if ( Nano.Dom.find('#app').attr('data-root') ) {
        options = require('./layout/WebBackendRoot').default;
    }

    window.RootApp = new Vue(options).$mount('#app');
});
