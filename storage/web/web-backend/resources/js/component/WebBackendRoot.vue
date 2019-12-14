<template>
    <div class="web-backend__root">
        <div class="web-backend__menu">
            <ul>
                <WebBackendMenu v-for="menu in menus" :key="menu.id" :value="menu" />
            </ul>
        </div>
        <div class="web-backend__body">
            <router-view />
        </div>
    </div>
</template>
<script>
    import WebBackendMenu from './WebBackendMenu';

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
            [WebBackendMenu.name]: WebBackendMenu
        },

        router: require('../config/router').default

    }
</script>
