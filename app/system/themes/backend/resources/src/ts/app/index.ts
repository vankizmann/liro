import Vue from 'vue';
(<any> window).Vue = Vue;

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import AppRouter from './router';

require('./controllers/root');
require('./controllers/test');

Vue.prototype.$window = (<any> window);

export default new Vue({
    template: '<liro-root></liro-root>', router: AppRouter
});
