<template>
    <div class="web-backend__root grid grid--row">
        <div class="web-backend__menu col--flex-none">
            <div class="scrollbar">
                <ul class="grid grid--col grid--10">
                    <WebBackendMainmenu v-for="route in mainmenu" :key="route.name" :value="route" />
                </ul>
            </div>
        </div>
        <div class="web-backend__tree col--flex-none">
            <div class="scrollbar">
                <WebBackendTree />
            </div>
        </div>
        <div class="web-backend__frame col--flex-auto">
            <div class="scrollbar grid grid--col">


                <div class="web-backend__header grid grid--row grid--middle col--flex-0">
                    <div class="col--auto col--left">
                        <ul class="grid grid--row grid--10">
                            <WebBackendSubmenu v-for="route in submenu" :key="route.name" :value="route" />
                        </ul>
                    </div>
                    <div class="col--auto col--right">
                        <WebBackendUser />
                    </div>
                </div>

                <div class="web-backend__body grid grid--col col--flex-1">
                    <RouterView :key="$route.fullPath" />
                </div>

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
