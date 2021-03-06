<template>
    <app-helper-list v-model="UsersModel" database="users_users">
        <div slot-scope="{ items, pages, options, order, search, paginate, filter }">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button :disabled="true" uk-toggle="target: #app-module-help">
                    {{ $t('liro-users.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

            <!-- Toolbar start -->
            <portal to="app-toolbar-left">
                <app-toolbar-button icon="plus" :href="createRoute">
                    {{ $t('liro-users.toolbar.create') }}
                </app-toolbar-button>
            </portal>
            <portal to="app-toolbar-right">
                <app-list-search
                    :columns="['name', 'email']" :config="options.search" @search="search"
                    :placeholder="$t('liro-users.form.search')"
                ></app-list-search>
            </portal>
            <!-- Toolbar end -->

            <!-- Help start -->
            <portal to="app-module-help">
                <h1>{{ $t('liro-users.toolbar.help') }}</h1>
            </portal>
            <!-- Help end -->

            <div class="uk-flex uk-flex-middle uk-margin-large">

                <!-- Title start -->
                <div>
                    <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-users.backend.users.index') }}</h1>
                </div>
                <!-- Title end -->

            </div>

            <div class="uk-form uk-form-stacked">
                <div class="uk-table-list uk-table-list-highlight">

                    <!-- Head start -->
                    <div class="uk-table-list-head">
                        <div class="uk-table-list-td uk-width-1-3">
                            <app-list-order column="name" :config="options.order" @order="order">
                                {{ $t('liro-users.form.name') }}
                            </app-list-order>
                        </div>
                        <div class="uk-table-list-td uk-width-1-3">
                            <app-list-order column="email" :config="options.order" @order="order">
                                {{ $t('liro-users.form.email') }}
                            </app-list-order>
                        </div>
                        <div class="uk-table-list-td uk-width-1-3">
                            <app-list-filter column="role_ids" :config="options.filter" :filters="roles" filters-value="id" filters-label="title" @filter="filter">
                                {{ $t('liro-users.form.roles') }}
                            </app-list-filter>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <app-list-filter column="state" :config="options.filter" :filters="states" @filter="filter">
                                {{ $t('liro-users.form.state') }}
                            </app-list-filter>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <app-list-order column="id" :reverse="true" :config="options.order" @order="order">
                                {{ $t('liro-users.form.id') }}
                            </app-list-order>
                        </div>
                    </div>
                    <!-- Head end -->

                    <!-- Body start -->
                    <div class="uk-table-list-row" v-for="(item, index) in items" :key="index">
                        <div class="uk-table-list-td uk-width-1-3">
                            <a :href="item.edit_route">{{ item.name }}</a>
                        </div>
                        <div class="uk-table-list-td uk-width-1-3">
                            <span>{{ item.email }}</span>
                        </div>
                        <div class="uk-table-list-td uk-width-1-3">
                            <ul class="uk-list-inline uk-margin-remove">
                                <li v-for="role in $liro.func.map(item.role_ids, 'id', roles)" :key="role.id">
                                    <a :href="role.edit_route">{{ role.title }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <app-list-state :active="item.state == 1" @click.prevent="item.state == 1 ? disable(item) : enable(item)"></app-list-state>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <span>{{ item.id }}</span>
                        </div>
                    </div>
                    <!-- Body end -->

                    <!-- Empty start -->
                    <div v-if="items.length == 0" class="uk-table-list-empty">
                        <span>{{ $t('liro-users.form.empty') }}</span>
                    </div>
                    <!-- Empty end -->

                </div>

                <!-- Pagination start -->
                <div class="uk-table-list-pagination">
                    <app-list-pagination :pages="pages" :config="options.paginate" @paginate="paginate"></app-list-pagination>
                </div>
                <!-- Pagination end -->

            </div>
        </div>
    </app-helper-list>
</template>
<script>
export default {

    props: {

        createRoute: {
            default() {
                return '';
            },
            type: String
        },

        users: {
            default() {
                return this.$liro.data.get('users', []);
            },
            type: [Array, Object]
        },

        roles: {
            default() {
                return this.$liro.data.get('roles', []);
            },
            type: [Array, Object]
        },

        states: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' },
                    { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }
                ];
            },
            type: Array
        }

    },

    data() {

        return {
            UsersModel: this.users
        };

    },

    methods: {

        enable(item) {
            this.$http.post(item.enable_route, {}).then(() => {
                item.state = 1;
            });
        },

        disable(item) {
            this.$http.post(item.disable_route, {}).then(() => {
                item.state = 0;
            });
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-users-index', this.default);
} 
</script>

