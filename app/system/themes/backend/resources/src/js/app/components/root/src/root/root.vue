<template>
    <div class="app__viewport">
        <div class="app__layout app__layout--error" v-if="error" :key="'error'">
            <div class="col col--flex-1 grid grid--row grid--middle grid--center">
                <main class="app__main">
                    <router-view></router-view>
                </main>
            </div>
        </div>
        <div class="app__layout app__layout--login" v-if="login" :key="'login'">
            <div class="col col--flex-1 grid grid--row">
                <div class="login__content col col--1-1 col--1-2@md">
                    <main class="app__main">
                        <router-view></router-view>
                    </main>
                </div>
                <div class="login__image col col--1-1 col--1-2@md">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="app__layout app__layout--index" v-if="index" :key="'index'">
            <header class="header">
                <div class="container">
                    <div class="header__inner grid grid--row grid--middle grid-20">
                        <div class="header__logo col">
                            <router-link to="/">cms.liro.com</router-link>
                        </div>

                        <nav class="header__nav col">
                            <div class="grid grid--row grid--middle grid--10">
                                <div class="nav__item col" v-for="nav in Data.get('nav', [])" v-if="canAccess(nav)">
                                    <router-link :to="Obj.get(nav, 'slug', '')" :exact="nav.slug === '/'">{{ trans(nav.title) }}</router-link>
                                </div>
                            </div>
                        </nav>

                        <div class="header__auth col col--right grid grid--row grid--10">
                            <div class="col auth__name">
                                <span>
                                    {{ Auth.user('name', 'Anonymous') }}
                                </span>
                            </div>
                            <div class="col auth__logout">
                                <a href="javascript:void(0)" @click="gotoLogout">
                                    {{ trans('liro-users::form.auth.logout') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main class="app__main">
                <div class="container">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>

</template>
<script>
    import AppRouter from '../router';

    export default {

        name: 'app-root',

        router: AppRouter,

        computed: {
            index() {
                return ! this.login && !this.error;
            }
        },

        data() {
            return { load: false, login: true, error: true }
        },

        beforeMount() {
            this.isLogin();
            this.isError();
            this.isGuest();
        },

        mounted() {
            this.isLogin();
            this.isError();
            this.isGuest();
        },

        beforeUpdate() {
            this.isLogin();
            this.isError();
            this.isGuest();
        },

        updated() {
            this.isLogin();
            this.isError();
            this.isGuest();
        },

        methods: {
            isGuest() {
                if ( this.$route.name && this.Auth.can(this.$route.name) === false ) {
                    this.gotoLogin();
                }
            },
            isLogin() {
                this.login = this.$router.currentRoute.name ===
                    'liro-users-auth-login';
            },
            isError() {
                this.error = this.$router.currentRoute.name ===
                    'liro-backend-error';
            },
            gotoLogin() {
                this.$router.push({ name: 'liro-users-auth-login'})
            },
            gotoLogout() {
                this.Ajax.call(['auth-logout', 'auth'], true)
                    .then(this.gotoLogin)
            },
            canAccess(nav) {
                return nav.hide === 0 && nav.state === 1 &&
                    this.Auth.can(nav.module);
            }
        }

    }
</script>
