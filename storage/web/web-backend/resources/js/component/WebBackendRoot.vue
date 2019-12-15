<template>
    <div class="web-backend__root grid grid--row">
        <div class="web-backend__menu col--flex-0">
            <ul>
                <WebBackendMenu v-for="menu in menus" :key="menu.id" :value="menu" />
            </ul>
        </div>
        <div class="web-backend__tree col--flex-0">
            <WebBackendTree />
        </div>
        <div class="web-backend__body col--flex-1">
            <router-view />
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import WebBackendMenu from "./WebBackendMenu";

    export default {

        name: 'WebBackendRoot',

        computed: {

            menus()
            {
                return this.Obj.get(window, '_menus', [])
                    .filter(menu => menu.hide === 0);
            }

        },

        components: {

            WebBackendMenu: WebBackendMenu,

            WebBackendTree()
            {
                return Vue.Extension.promise('WebMenuTree', () => Vue.component('WebMenuTree'));
            },

        },

        router: require('../config/router').default

    }
</script>
