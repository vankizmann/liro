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

Nano.Dom.ready(() => {

    let WebBackendTitle = require("./component/WebBackendTitle").default;
    Vue.component(WebBackendTitle.name, WebBackendTitle);

    let WebBackendMainmenu = require("./component/WebBackendMainmenu").default;
    Vue.component(WebBackendMainmenu.name, WebBackendMainmenu);

    let WebBackendSubmenu = require("./component/WebBackendSubmenu").default;
    Vue.component(WebBackendSubmenu.name, WebBackendSubmenu);

    window.App = new Vue(
        require("./component/WebBackendRoot").default
    ).$mount('#app');
});
