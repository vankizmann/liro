import Vue from 'vue';
window.Vue = Vue;

import { VueNano } from 'nanojs';
Vue.use(VueNano);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

require("./components/bootstrap");

Vue.ready(() => {
    new Vue(Vue.component('app-root')).$mount('#app');
});
