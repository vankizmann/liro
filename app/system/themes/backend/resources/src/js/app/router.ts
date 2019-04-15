import VueRouter from 'vue-router';
import { each } from 'lodash';

declare const dom : any;
declare const ext : any;

each((<any> window).imports || {}, (config, name) => {
    ext.bind(name, config)
});

let routes : any[] = [];

each((<any> window).menus || [], function (menu) {

    let route : any = {
        path: menu.slug, component: (done) => {
            console.log('inital?');
            ext.import(menu.module, done)
        }
    };

    route.beforeEnter = (from, to, next) => {
        dom.title(menu.title); next();
    };

    routes.push(route);
});

export default new VueRouter({
    base: (<any> window).basePath, mode: 'history', routes: routes
})
