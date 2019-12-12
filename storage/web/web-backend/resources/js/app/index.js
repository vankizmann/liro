import Vue from 'vue';
window.Vue = Vue;

import Nano from "nano-js";
Nano.install(Vue.prototype);

import VueNano from 'nano-ui';
Vue.use(VueNano);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

require('./components/bootstrap');

Nano.Dom.ready(() => {
    window.App = new Vue(Vue.component('WebRoot')).$mount('#app');
});
