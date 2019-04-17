import Vue from 'vue';
(<any> window).Vue = Vue;

declare var ux : any;
Vue.prototype.ux = ux;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as ElementUI from 'element-ui';
Vue.use(ElementUI, { i18n: ux.locale.trans });

let AppRoot = require('./layout/root');

Vue.prototype.trans = ux.locale.trans;
Vue.prototype.choice = ux.locale.choice;

export default new Vue(AppRoot);
