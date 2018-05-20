<template>
    <div class="uk-form uk-form-stacked">
        
        <!-- Infobar start -->
        <portal to="app-infobar-action">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('liro-users.toolbar.create') }}
            </app-toolbar-link>
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Infobar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>{{ $t('liro-users.toolbar.help') }}</h1>
        </portal>
        <!-- Help end -->

        <div class="uk-flex uk-flex-middle uk-margin-bottom">

            <!-- Title start -->
            <div>
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-users.backend.roles.index') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Search start -->
            <div style="width: 300px; margin-left: auto;">
                <app-list-search :columns="['title', 'description']" :placeholder="$t('liro-users.form.search')"></app-list-search>
            </div>
            <!-- Search end -->

        </div>

        <div class="uk-table-list">

            <!-- Head start -->
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-width-1-4">
                    <app-list-sort column="title">
                        {{ $t('liro-users.form.title') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-2-4">
                    <app-list-sort column="description">
                        {{ $t('liro-users.form.description') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <span>{{ $t('liro-users.form.routes') }}</span>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-sort column="id" :reverse="true">
                        {{ $t('liro-users.form.id') }}
                    </app-list-sort>
                </div>
            </div>
            <!-- Head end -->

            <!-- Body start -->
            <div v-if="list.length != 0" class="uk-table-list-row" v-for="role in list" :key="role.id">
                <div class="uk-table-list-td uk-width-1-4">
                    <a :href="role.edit_route">{{ role.title }}</a>
                </div>
                <div class="uk-table-list-td uk-width-2-4">
                    <span class="uk-text-muted">{{ role.description }}</span>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <span class="uk-text-muted">{{ $tc('liro-users.form.route_count', role.route_ids.length, { count: role.route_ids.length }) }}</span>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <span>{{ role.id }}</span>
                </div>
            </div>
            <!-- Body end -->

            <!-- Empty start -->
            <div v-if="list.length == 0" class="uk-table-list-empty uk-padding uk-text-center">
                <span>{{ $t('liro-users.form.empty') }}</span>
            </div>
            <!-- Empty end -->
            
        </div>

        <!-- Pagination start -->
        <div class="uk-table-list-pagination uk-margin">
            <app-list-pagination></app-list-pagination>
        </div>
        <!-- Pagination end -->

    </div>
</template>
<script>
    module.exports = {

        name: 'app-roles-index',

        computed: {
            list() {
                return this.$store.getters['list/get'];
            }
        },

        props: {
            createRoute: {
                default: '',
                type: String
            },
            roles: {
                default: () => [],
                type: Array
            },
            users: {
                default: () => [],
                type: Array
            },
            routes: {
                default: () => [],
                type: Array
            }
        },

        mounted() {
            this.$store.commit('list/init', this.roles);
        }

    }
    liro.component(module.exports);
</script>
