<template>
    <div class="root">
        <component :is="isAppView ? 'app-root-system' : 'app-root-module'" />
    </div>
</template>
<script>
    import AppRouter from '../router';

    export default {

        name: 'app-root',

        router: AppRouter,

        computed: {

            isAppView()
            {
                return (this.$route.name || 'app-root').match(/^app-/) !== null;
            }

        },

        watch: {

            $route()
            {
                if ( this.$route.name && this.Auth.can(this.$route.name) === false ) {
                    return this.gotoLogin();
                }

                this.Dom.title(this.trans(this.$route.meta.title));
            }

        },

        mounted() {
            if ( this.$route.name ) {
                this.Dom.title(this.trans(this.$route.meta.title));
            }
        },

        methods: {

            gotoLogin()
            {
                this.$router.push({ name: 'app-login'})
            },

            gotoLogout()
            {
                this.$router.push({ name: 'app-logout'});
            }

        }

    }
</script>
