import VueRouter from 'vue-router';
import { each, isEmpty, has } from 'lodash';

declare var App : any;
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

    if ( isEmpty(menu.module) && ! has(menu, 'query.redirect') ) {
        return;
    }

    let error = () => {
        App.$message.error(App.trans('vue.module.missing', menu));
    };

    let route : any = {
        path: menu.slug, props: { menu }
    };

    if ( has(menu, 'query.redirect') ) {
        route.redirect = (to) => {
            return { name: menu.query.redirect }
        }
    }

    if ( ! has(route, 'redirect') ) {
        route.component = (done) => {
            window.ux.ext.import(menu.module, done, error)
        };
    }

    if ( has(route, 'component') ) {
        route.name = menu.module;
    }

    route.beforeEnter = (from, to, next) => {
        window.ux.dom.title(menu.title); next();
    };

    routes.push(route);
});

let AppError = require('./layout/error.vue');

routes.push({
    path: '*', component: AppError
});

export default new VueRouter({
    base: (<any> window).basePath, mode: 'history', routes: routes
})
