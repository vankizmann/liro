<template>
    <div class="web-backend grid grid--row">
        <div class="web-backend-menu col--flex-none">
            <ul class="scrollbar grid grid--col grid--middle grid--10">
                <WebBackendMainmenu v-for="route in mainmenu" :key="route.name" :value="route" />
            </ul>
        </div>
        <div class="web-backend-sidebar col--flex-none grid grid--col">

            <div class="col--flex-0">
                <div class="web-backend-logo">
                    liro-cms.com
                </div>
            </div>

            <div class="web-backend-tree n-inverse scrollbar col--flex-auto">
                <WebBackendTree />
            </div>

            <WebBackendResizer :min-width="300" :max-width="640" />
        </div>
        <div class="web-backend-mainbar col--flex-auto grid grid--col">

            <div class="web-backend-header grid grid--row grid--middle col--flex-0">
                <div class="col--auto col--left">
                    <ul class="grid grid--row grid--40">
                        <WebBackendSubmenu v-for="route in submenu" :key="route.name" :value="route" />
                    </ul>
                </div>
                <div class="col--auto col--right">
                    <WebBackendUser />
                </div>
            </div>

            <div class="web-backend-body scrollbar col--flex-auto">
                <RouterView :key="$route.fullPath" />
            </div>

        </div>
    </div>
</template>
<script>
    import Vue from "vue";

    export default {

        name: 'WebBackendRoot',

        computed: {

            mainmenu()
            {
                let routes = this.$router.options.routes;

                routes = this.Arr.filter(routes, (route) => {
                    return ! this.Obj.get(route, 'meta.root');
                });

                routes = this.Arr.filter(routes, (route) => {
                    return ! this.Obj.get(route, 'meta.menu.hide', 1);
                });

                return this.Arr.each(routes, (route) => {
                    return this.Obj.get(route, 'meta.menu');
                });
            },

            submenu()
            {
                let routes = this.Obj.get(this.$route, 'meta.root.children',
                    this.Obj.get(this.$route, 'meta.menu.children', []));

                return this.Arr.filter(routes, (route) => {
                    return ! this.Obj.get(route, 'hide', 1);
                });
            }

        },

        components: {

            WebBackendTree()
            {
                return Vue.Extension.promise('WebMenuTree',
                    () => Vue.component('WebMenuTree'));
            },

            WebBackendUser()
            {
                return Vue.Extension.promise('WebAuthUser',
                    () => Vue.component('WebAuthUser'));
            },

        },

        router: require('../config/router').default

    }
</script>
