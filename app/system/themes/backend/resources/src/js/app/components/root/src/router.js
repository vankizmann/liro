import Vue from "vue";
import VueRouter from 'vue-router';

let menus = Vue.Obj.get(window, '_menus', []), routes = [];

Vue.Arr.each(menus, function (menu) {

    let component = Vue.Obj.get(menu, 'module', null);

    if ( Vue.Any.isEmpty(component) && ! Vue.Obj.has(menu, 'query.redirect') ) {
        return;
    }

    let error = () => {
        Vue.Notify(Vue.trans('vue.module.missing', menu), 'danger');
    };

    let route = {
        path: Vue.Obj.get(menu, 'slug'), props: true
    };

    if ( Vue.Obj.has(menu, 'query.redirect') ) {
        route.redirect = {
            name: Vue.Obj.get(menu, 'query.redirect')
        };
    }

    if ( ! Vue.Obj.has(route, 'redirect') ) {
        route.component = (done) => {
            Vue.Extension.import(component, done, error)
        };
    }

    if ( Vue.Obj.has(route, 'component') ) {
        route.name = component;
    }

    routes.push(route);
});

let error = {
    name: 'app-error', path: '*', component: Vue.component('app-error')
};

routes.push(error);

export default new VueRouter({
    base: Vue.Obj.get(window, 'basePath', '/'), mode: 'history', routes: routes
})
