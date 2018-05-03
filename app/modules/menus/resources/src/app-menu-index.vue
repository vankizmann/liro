<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('menus.module.menus-create') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('theme.help') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-module-help">
            <h1>Help</h1>
        </portal>
        <div class="app-menu-index">
            <div class="uk-menu-title uk-flex uk-flex-middle">
                <div class="uk-menu-title-collapse">
                    {{ $t('theme.hash') }}
                </div>
                <div class="uk-menu-title-title uk-flex-1">
                    {{ $t('theme.title') }}
                </div>
                <div class="uk-menu-title-hidden">
                    {{ $t('theme.hidden') }}
                </div>
                <div class="uk-menu-title-state">
                    {{ $t('theme.state') }}
                </div>
                <div class="uk-menu-title-id uk-width-auto">
                    {{ $t('theme.id') }}
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
