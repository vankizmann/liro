import Vue from 'vue';
(<any> window).Vue = Vue;

declare var ux : any;
Vue.prototype.ux = ux;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as ElementUI from 'element-ui';
Vue.use(ElementUI, { i18n: ux.locale.trans });

import AppRouter from './router';

require('./controllers/root');
require('./controllers/test');

Vue.prototype.trans = ux.locale.trans;
Vue.prototype.choice = ux.locale.choice;

AppRouter.beforeEach((to, from, next) => {

    if ( ux.auth.can(to.name) === false ) {
        return AppRouter.push({ name: 'liro-users-auth-login' });
    }

    next();
});

export default new Vue({
    template: '<liro-root></liro-root>',
    router: AppRouter
});
