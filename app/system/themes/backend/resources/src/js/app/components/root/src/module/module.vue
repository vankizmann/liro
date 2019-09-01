<template>
    <div class="root__module">
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
                            <a href="javascript:void(0)" @click="$root.gotoLogout">
                                {{ trans('Sign out') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
<script>
    export default {

        name: 'app-root-module',

        methods: {

            canAccess(nav)
            {
                return nav.hide === 0 && nav.state === 1 &&
                    this.Auth.can(nav.module);
            }

        }

    }
</script>
