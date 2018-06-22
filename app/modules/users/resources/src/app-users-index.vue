<template>
    <div class="uk-form uk-form-stacked">

        <!-- Infobar start -->
        <portal to="app-infobar-right">
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
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-users.backend.users.index') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Search start -->
            <div style="width: 300px; margin-left: auto;">
                <app-list-search :columns="['name', 'email']" :placeholder="$t('liro-users.form.search')"></app-list-search>
            </div>
            <!-- Search end -->

        </div>

        <div class="uk-table-list">

            <!-- Head start -->
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-sort column="name">
                        {{ $t('liro-users.form.name') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-sort column="email">
                        {{ $t('liro-users.form.email') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-filter column="role_ids" :filters="roles" filters-value="id" filters-label="title" :reset="$t('liro-users.form.reset')">
                        {{ $t('liro-users.form.roles') }}
                    </app-list-filter>
                </div>
                <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                    <app-list-filter column="state" :reset="$t('liro-users.form.reset')" :filters="states">
                        {{ $t('liro-users.form.state') }}
                    </app-list-filter>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-sort column="id" :reverse="true">
                        {{ $t('liro-users.form.id') }}
                    </app-list-sort>
                </div>
            </div>
            <!-- Head end -->

            <!-- Body start -->
            <div v-if="list.length != 0" class="uk-table-list-row" v-for="user in list" :key="user.id">
                <div class="uk-table-list-td uk-width-1-3">
                    <a :href="user.edit_route">{{ user.name }}</a>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <span>{{ user.email }}</span>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <ul class="uk-list-inline uk-margin-remove">
                        <li v-for="role in $liro.func.map(user.role_ids, 'id', roles)" :key="role.id">
                            <a :href="role.edit_route">{{ role.title }}</a>
                        </li>
                    </ul>
                </div>
                <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                    <app-list-state :active="user.state == 1" :href="user.state == 1 ? user.disable_route : user.enable_route"></app-list-state>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <span>{{ user.id }}</span>
                </div>
            </div>
            <!-- Body end -->

            <!-- Empty start -->
            <div v-if="list.length == 0" class="uk-table-list-empty uk-padding uk-text-center">
                <span>{{ $t('users.form.empty') }}</span>
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

        name: 'app-users-index',

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
                default() {
                    return [];
                },
                type: Array
            },
            users: {
                default() {
                    return [];
                },
                type: Array
            },
            states: {
                default() {
                    return [
                        { value: 1, label: this.$t('liro-users.form.enabled') },
                        { value: 0, label: this.$t('liro-users.form.disabled') }
                    ]
                },
                type: Array
            }
        },

        mounted() {
            this.$store.commit('list/init', this.users);
        }

    }
    // liro.component(module.exports);
</script>
