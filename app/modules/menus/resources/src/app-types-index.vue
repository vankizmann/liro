<template>
    <div class="uk-form uk-form-stacked">
        
        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('liro-menus.toolbar.create') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Toolbar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>{{ $t('liro-menus.toolbar.help') }}</h1>
        </portal>
        <!-- Help end -->

        <div class="uk-flex uk-flex-middle uk-margin-bottom">

            <!-- Title start -->
            <div>
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-menus.backend.types.index') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Search start -->
            <div style="width: 300px; margin-left: auto;">
                <app-list-search :columns="['title', 'theme', 'route']" :placeholder="$t('liro-menus.form.search')"></app-list-search>
            </div>
            <!-- Search end -->

        </div>

        <div class="uk-table-list">

            <!-- Head start -->
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-width-2-4">
                    <app-list-sort column="title">
                        {{ $t('liro-menus.form.title') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <app-list-sort column="theme">
                        {{ $t('liro-menus.form.theme') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <app-list-sort column="route">
                        {{ $t('liro-menus.form.route') }}
                    </app-list-sort>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-sort column="id" :reverse="true">
                        {{ $t('liro-menus.form.id') }}
                    </app-list-sort>
                </div>
            </div>
            <!-- Head end -->

            <!-- Body start -->
            <div v-if="list.length != 0" class="uk-table-list-row" v-for="type in list" :key="type.id">
                <div class="uk-table-list-td uk-width-2-4">
                    <a :href="type.edit_route">{{ type.title }}</a>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <span class="uk-text-muted">{{ type.theme }}</span>
                </div>
                <div class="uk-table-list-td uk-width-1-4">
                    <span class="uk-text-muted">{{ type.route }}</span>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <span>{{ type.id }}</span>
                </div>
            </div>
            <!-- Body end -->

            <!-- Empty start -->
            <div v-if="list.length == 0" class="uk-table-list-empty uk-padding uk-text-center">
                <span>{{ $t('liro-menus.form.empty') }}</span>
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

        name: 'app-types-index',

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
            types: {
                default: () => [],
                type: Array
            },
            themes: {
                default: () => [],
                type: Array
            }
        },

        mounted() {
            this.$store.commit('list/init', this.types);
        }

    }
    liro.component(module.exports);
</script>
