import Vue from "vue";
import VueRouter from 'vue-router';

let vueRoutes = [];

Vue.Arr.recursive(window._menus || [], 'children', (menu) => {

    let component = Vue.Obj.get(menu, 'extend.component');

    let route = {
        path: `/${menu.slug}`, props: true, meta: { menu }
    };

    route.component = () => {
        return new Promise((resolve, reject) => {
            Vue.Extension.get(component, () => resolve(Vue.component(component)), reject);
        });
    };

    vueRoutes.push(route);
});

export default new VueRouter({
    base: window.basePath, mode: 'history', routes: vueRoutes
})
