import VueRouter from 'vue-router';
import { each } from 'lodash';

declare var window : any;

each(window.locales || {}, (path, name) => {
    window.ux.locale.set(name, path)
});

each(window.routes || {}, (path, name) => {
    window.ux.route.set(name, path)
});

each(window.imports || {}, (config, name) => {
    window.ux.ext.bind(name, config)
});

each(window.datas || {}, (value, key) => {
    window.ux.data.set(key, value)
});

let routes : any[] = [];

each(window.menus || [], function (menu) {

    let route : any = {
        path: menu.slug, name: menu.module, component: (done) => {
            window.ux.ext.import(menu.module, done)
        }
    };

    route.beforeEnter = (from, to, next) => {
        window.ux.dom.title(menu.title); next();
    };

    routes.push(route);
});

let AppError = require('./layout/error.vue');

routes.push({
    name: 'liro-error', path: '*', component: AppError
});

export default new VueRouter({
    base: (<any> window).basePath, mode: 'history', routes: routes
})
