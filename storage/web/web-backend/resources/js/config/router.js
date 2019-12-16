import Vue from "vue";
import VueRouter from 'vue-router';

let resolveMenu = (menu) => {

    let route = {
        path: `/${menu.slug}`, name: menu.id, props: true, children: [], meta: { menu }
    };

    let redirect = Vue.Obj.get(menu, 'extend.redirect');

    if ( redirect !== null ) {
        route.redirect = () => {
            return { name: redirect };
        }
    }

    let component = Vue.Obj.get(menu, 'extend.component');

    if ( component !== null ) {
        route.component = () => {
            return Vue.Extension.promise(component, () => Vue.component(component));
        };
    }

    if ( ! Vue.Any.isEmpty(menu.children) ) {
        route.children = Vue.Arr.each(menu.children, resolveMenu);
    }

    return route;
};

let vueRoutes = Vue.Arr.each(window._menus || [], resolveMenu);

export default new VueRouter({
    base: window.basePath, mode: 'history', routes: vueRoutes
})
