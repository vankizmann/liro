<template>
    <app-helper-list v-model="RolesModel" database="users_roles">
        <div slot-scope="{ items, pages, options, order, search, paginate, filter }" class="uk-form uk-form-stacked">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button class="uk-success" icon="plus" :href="createRoute">
                    {{ $t('liro-users.toolbar.create') }}
                </app-toolbar-button>
                <app-toolbar-button uk-toggle="target: #app-module-help">
                    {{ $t('liro-users.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

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

                <!-- Search start -->
                <div style="width: 300px; margin-left: auto;">
                    <app-list-search
                        :columns="['name', 'email']" :config="options.search" @search="search"
                        :placeholder="$t('liro-users.form.search')"
                    ></app-list-search>
                </div>
                <!-- Search end -->

            </div>

            <div class="uk-table-list uk-table-list-highlight">

                <!-- Head start -->
                <div class="uk-table-list-head">
                    <div class="uk-table-list-td uk-width-1-4">
                        <app-list-order column="title" :config="options.order" @order="order">
                            {{ $t('liro-users.form.title') }}
                        </app-list-order>
                    </div>
                    <div class="uk-table-list-td uk-width-2-4">
                        <app-list-order column="description" :config="options.order" @order="order">
                            {{ $t('liro-users.form.description') }}
                        </app-list-order>
                    </div>
                    <div class="uk-table-list-td uk-width-1-4">
                        <span>{{ $t('liro-users.form.routes') }}</span>
                    </div>
                    <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                        <app-list-order column="id" :reverse="true" :config="options.order" @order="order">
                            {{ $t('liro-users.form.id') }}
                        </app-list-order>
                    </div>
                </div>
                <!-- Head end -->

                <!-- Body start -->
                <div class="uk-table-list-row" v-for="(item, index) in items" :key="index">
                    <div class="uk-table-list-td uk-width-1-4">
                        <a :href="item.edit_route">{{ item.title }}</a>
                    </div>
                    <div class="uk-table-list-td uk-width-2-4">
                        <span>{{ item.description }}</span>
                    </div>
                    <div class="uk-table-list-td uk-width-1-4">
                        <span class="uk-text-muted">{{ $tc('liro-users.form.route_count', item.route_ids.length, { count: item.route_ids.length }) }}</span>
                    </div>
                    <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                        <span>{{ item.id }}</span>
                    </div>
                </div>
                <!-- Body end -->

                <!-- Empty start -->
                <div v-if="items.length == 0" class="uk-table-list-empty uk-padding uk-text-center">
                    <span>{{ $t('liro-users.form.empty') }}</span>
                </div>
                <!-- Empty end -->
                
            </div>

            <!-- Pagination start -->
            <div class="uk-table-list-pagination uk-margin-top">
                <app-list-pagination :pages="pages" :config="options.paginate" @paginate="paginate"></app-list-pagination>
            </div>
            <!-- Pagination end -->

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
            RolesModel: this.roles
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
    liro.vue.$component('app-roles-index', this.default);
} 
</script>