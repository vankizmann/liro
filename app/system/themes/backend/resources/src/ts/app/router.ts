import VueRouter from 'vue-router';
import { each } from 'lodash';

declare const ux : any;

each((<any> window).locales || {}, (path, name) => {
    ux.locale.set(name, path)
});

each((<any> window).routes || {}, (path, name) => {
    ux.route.set(name, path)
});

each((<any> window).imports || {}, (config, name) => {
    ux.ext.bind(name, config)
});

each((<any> window).datas || {}, (value, key) => {
    ux.data.set(key, value)
});

let routes : any[] = [];

each((<any> window).menus || [], function (menu) {

    let route : any = {
        path: menu.slug, name: menu.module, component: (done) => {
            ux.ext.import(menu.module, done)
        }
    };

    route.beforeEnter = (from, to, next) => {
        ux.dom.title(menu.title); next();
    };

    routes.push(route);
});

let Error = {
    template: '<div>404 not found</div>'
};

routes.push({
    path: '*', component: Error
});

export default new VueRouter({
    base: (<any> window).basePath, mode: 'history', routes: routes
})
