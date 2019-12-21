import Vue from 'vue';
window.Vue = Vue;

import Nano from "nano-js";
Nano.install(Vue.prototype);

import VueNano from 'nano-ui';
Vue.use(VueNano);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Axios from "axios";
Vue.$http = Vue.prototype.$http = Axios;

require('./config/axios');

require('./component/menu/index');
require('./component/helper/index');

Nano.Dom.ready(() => {
    window.App = new Vue(require('./layout/WebBackendRoot').default).$mount('#app');
});
