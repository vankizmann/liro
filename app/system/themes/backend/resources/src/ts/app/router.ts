import VueRouter from 'vue-router';
import { each } from 'lodash';

declare const ux : any;

each((<any> window).routes || {}, (path, name) => {
    ux.route.bind(name, path)
});

each((<any> window).imports || {}, (config, name) => {
    ux.ext.bind(name, config)
});

let routes : any[] = [];

each((<any> window).menus || [], function (menu) {

    let route : any = {
        path: menu.slug, component: (done) => ux.ext.import(menu.module, done)
    };

    route.beforeEnter = (from, to, next) => {
        ux.dom.title(menu.title); next();
    };

    routes.push(route);
});

export default new VueRouter({
    base: (<any> window).basePath, mode: 'history', routes: routes
})
