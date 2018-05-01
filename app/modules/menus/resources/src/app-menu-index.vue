<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-link icon="fa fa-plus" :href="createRoute">
                {{ $t('cms.create') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
        </portal>
        <div class="app-menu-index">
            <app-menu-index-item ref="sortable" v-model="value"></app-menu-index-item>
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
