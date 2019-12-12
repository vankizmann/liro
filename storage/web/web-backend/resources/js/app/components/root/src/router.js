import Vue from "vue";
import VueRouter from 'vue-router';

let registerMenuRoute = (menu) => {

    let component = Vue.Obj.get(menu, 'extend.component');

    let route = {
        path: `/${menu.slug}`, props: true, meta: { menu }
    };

    route.component = () => {
        return new Promise((resolve, reject) => {
            Vue.Extension.get(component, () => resolve(Vue.component(component)), reject);
        });
    };

    return route;
};

export default new VueRouter({
    base: window.basePath, mode: 'history', routes: Vue.Arr.each(window._menus || [], registerMenuRoute)
})
