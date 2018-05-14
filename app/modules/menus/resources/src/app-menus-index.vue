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
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-menus.backend.menus.index') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Search start -->
            <div style="width: 300px; margin-left: auto;">
                <app-list-search :columns="['title', 'description']" :placeholder="$t('liro-menus.defaults.search')"></app-list-search>
            </div>
            <!-- Search end -->

        </div>

        <div class="uk-table-list">
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-table-list-td-xs uk-text-center">
                    {{ $t('liro-menus.form.hash') }}
                </div>
                <div class="uk-table-list-td uk-table-list-td-auto">
                    {{ $t('liro-menus.form.title') }}
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    {{ $t('liro-menus.form.hidden') }}
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    {{ $t('liro-menus.form.state') }}
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    {{ $t('liro-menus.form.id') }}
                </div>
            </div>
            <app-menu-index-list ref="sortable" v-model="value"></app-menu-index-list>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-menu-index',
        props: {
            baseRoute: {
                default: '',
                type: String
            },
            createRoute: {
                default: '',
                type: String
            },
            orderRoute: {
                default: '',
                type: String
            },
            value: {
                default: [],
                type: Array
            }
        },
        mounted() {

            $(this.$refs.sortable.$el).nestedSortable({
                handle:             'div',
                items:              'li',
                toleranceElement:   '> div',
                relocate:           this.relocate
            });

        },
        methods: {
            relocate() {
                this.$http.post(this.orderRoute, { order: $(this.$refs.sortable.$el).nestedSortable('toArray') });
            }
        }
    }
    liro.component(module.exports);
</script>
