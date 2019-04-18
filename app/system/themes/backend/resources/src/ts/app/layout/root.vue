<template>
    <div class="app__viewport" v-loading="load">
        <div class="app__layout app__layout--error" v-if="error" key="error">
            <div class="col col--flex-1 grid grid--row grid--middle grid--center">
                <main class="app__main">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </main>
            </div>
        </div>
        <div class="app__layout app__layout--login" v-if="login" key="login">
            <div class="col col--flex-1 grid grid--row">
                <div class="login__content col col--1-1 col--1-2@md">
                    <main class="app__main">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </main>
                </div>
                <div class="login__image col col--1-1 col--1-2@md">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="app__layout app__layout--index" v-if="index" key="index">
            <header class="app__header">
                <div class="header__logo col">
                    <router-link to="/"><h2>Logo</h2></router-link>
                </div>
                <nav class="header__nav col">
                    <div class="grid grid--row grid--middle grid--10">
                        <div class="nav__item col" v-for="nav in ux.data.get('nav', [])" v-if="canAccess(nav)">
                            <router-link :to="nav.slug" :exact="nav.slug === '/'">{{ trans(nav.title) }}</router-link>
                        </div>
                    </div>
                </nav>
                <div class="header__auth col col--right grid grid--row grid--10">
                    <div class="col auth__name">
                        <span>
                            {{ ux.auth.user('name', 'Anonymous') }}
                        </span>
                    </div>
                    <div class="col auth__logout">
                        <a href="javascript:void(0)" @click="gotoLogout">
                            {{ trans('liro-users::form.auth.logout') }}
                        </a>
                    </div>
                </div>
            </header>
            <section class="app__toolbar" v-if="true === false">
                <div class="grid grid--row grid--middle grid--10">
                    <div class="toolbar__title col col--left">
                        <h1>{{ trans(ux.dom.titleNow) }}</h1>
                    </div>
                    <div class="toolbar__actions col col--right">
                        <el-button type="primary">Benutzer erstellen</el-button>
                    </div>
                </div>
            </section>
            <main class="app__main">
                <keep-alive>
                    <router-view v-if="Object.keys($route.params).length === 0"></router-view>
                </keep-alive>
                <router-view v-if="Object.keys($route.params).length !== 0"></router-view>
            </main>
        </div>
    </div>

</template>
<script lang="ts">
    import { get } from 'lodash';
    import Vue from "vue";
    import AppRouter from '../router';

    export default Vue.extend({

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
                if ( this.ux.auth.can(this.$route.name) === false ) {
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
                this.ux.ajax.call(['auth-logout', 'auth'], true)
                    .then(this.gotoLogin)
            },
            canAccess(nav) {
                return nav.hide === 0 && nav.state === 1 &&
                    this.ux.auth.can(nav.module);
            }
        }

    });

    Vue.component('liro-root', this.default)
</script>
