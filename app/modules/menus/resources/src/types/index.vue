<template>
    <app-helper-list v-model="TypesModel" database="app-menus-types">
        <div slot-scope="{ items, pages, options, order, search, paginate }">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button :disabled="true" uk-toggle="target: #app-module-help">
                    {{ $t('liro-menus.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

            <!-- Toolbar start -->
            <portal to="app-toolbar-left">
                <app-toolbar-button icon="plus" :href="createRoute">
                    {{ $t('liro-menus.toolbar.create') }}
                </app-toolbar-button>
            </portal>
            <portal to="app-toolbar-right">
                <app-list-search
                    :columns="['title', 'theme', 'route']" :config="options.search" @search="search"
                    :placeholder="$t('liro-menus.form.search')"
                ></app-list-search>
            </portal>
            <!-- Toolbar end -->

            <!-- Help start -->
            <portal to="app-module-help">
                <h1>{{ $t('liro-menus.toolbar.help') }}</h1>
            </portal>
            <!-- Help end -->

            <div class="uk-flex uk-flex-middle uk-margin-large">

                <!-- Title start -->
                <div>
                    <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-menus.backend.types.index') }}</h1>
                </div>
                <!-- Title end -->

                <!-- Search start -->
                <div style="width: 300px; margin-left: auto;">
                    
                </div>
                <!-- Search end -->

            </div>

            <div class="uk-form uk-form-stacked">
                <div class="uk-table-list uk-table-list-highlight">

                    <!-- Head start -->
                    <div class="uk-table-list-head">
                        <div class="uk-table-list-td uk-width-2-4">
                            <app-list-order column="title" :config="options.order" @order="order">
                                {{ $t('liro-menus.form.title') }}
                            </app-list-order>
                        </div>
                        <div class="uk-table-list-td uk-width-1-4">
                            <app-list-order column="theme" :config="options.order" @order="order">
                                {{ $t('liro-menus.form.theme') }}
                            </app-list-order>
                        </div>
                        <div class="uk-table-list-td uk-width-1-4">
                            <app-list-order column="route" :config="options.order" @order="order">
                                {{ $t('liro-menus.form.route') }}
                            </app-list-order>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <app-list-order column="id" :reverse="true" :config="options.order" @order="order">
                                {{ $t('liro-menus.form.id') }}
                            </app-list-order>
                        </div>
                    </div>
                    <!-- Head end -->

                    <!-- Body start -->
                    <div class="uk-table-list-row" v-for="(item, index) in items" :key="index">
                        <div class="uk-table-list-td uk-width-2-4">
                            <a :href="item.edit_route">{{ item.title }}</a>
                        </div>
                        <div class="uk-table-list-td uk-width-1-4">
                            <span class="uk-text-muted">{{ item.theme }}</span>
                        </div>
                        <div class="uk-table-list-td uk-width-1-4">
                            <span class="uk-text-muted">{{ item.route }}</span>
                        </div>
                        <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                            <span>{{ item.id }}</span>
                        </div>
                    </div>
                    <!-- Body end -->

                    <!-- Empty start -->
                    <div v-if="items.length == 0" class="uk-table-list-empty">
                        <span>{{ $t('liro-menus.form.empty') }}</span>
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

    computed: {
        list() {
            return this.types;
        }
    },

    props: {
        createRoute: {
            default() {
                return '';
            },
            type: String
        },
        types: {
            default() {
                return this.$liro.data.get('types', []);
            },
            type: [Array, Object]
        },
        themes: {
            default() {
                return this.$liro.data.get('themes', []);
            },
            type: [Array, Object]
        }
    },

    data() {

        return {
            TypesModel: this.types
        };

    }

}

if (window.liro) {
    liro.vue.$component('app-types-index', this.default);
} 

</script>
