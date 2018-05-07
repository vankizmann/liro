<template>
    <div class="uk-form uk-form-stacked">
        
        <portal to="app-toolbar-left">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('users.module.users-create') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('users.module.users-help') }}
            </app-toolbar-link>
        </portal>

        <portal to="app-module-help">
            <h1>{{ $t('users.module.users-help') }}</h1>
        </portal>

        <div class="uk-flex uk-flex-middle uk-margin-bottom">

            <!-- Title start -->
            <div>
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('users.module.users-index') }}</h1>
            </div>
            <!-- Title end -->

            <div style="margin-left: auto;">
                <app-list-search :columns="['name', 'email']" :placeholder="$t('users.form.search')"></app-list-search>
            </div>

        </div>

        <div class="uk-table-list">
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-sort column="name">
                        {{ $t('users.form.name') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-sort column="email">
                        {{ $t('users.form.email') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-filter column="role_ids" :filters="roles" filters-value="id" filters-label="title" :reset="$t('users.form.reset')">
                        {{ $t('users.form.roles') }}
                    </app-list-filter>
                </div>
                <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                    <app-list-filter column="state" :filters="[{ value: 0, label: 'Unpubished' },{ value: 1, label: 'Published' }]" :reset="$t('users.form.reset')">
                        {{ $t('users.form.state') }}
                    </app-list-filter>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-sort column="id" :reverse="true">
                        {{ $t('users.form.id') }}
                    </app-list-sort>
                </div>
            </div>
            <div class="uk-table-list-row" v-for="user in list" :key="user.id">
                <div class="uk-table-list-td uk-width-1-3">
                    <a :href="user.edit_route">{{ user.name }}</a>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <span>{{ user.email }}</span>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <ul class="uk-list-inline uk-margin-remove">
                        <li v-for="role in $liro.func.map(user.role_ids, 'id', roles)" :key="role.id">
                            <a :href="role.id">{{ role.title }}</a>
                        </li>
                    </ul>
                </div>
                <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                    <app-list-state :active="user.state == 1"></app-list-state>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <span>{{ user.id }}</span>
                </div>
            </div>
        </div>
        <app-list-pagination class="uk-margin"></app-list-pagination>
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
            baseRoute: {
                default: '',
                type: String
            },
            createRoute: {
                default: '',
                type: String
            },
            roles: {
                default: [],
                type: Array
            },
            users: {
                default: [],
                type: Array
            }
        },
        mounted() {
            this.$store.commit('list/init', this.users);
        }

    }
    liro.component(module.exports);
</script>
