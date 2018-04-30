<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-event icon="fa fa-plus" :href="createRoute">
                {{ $t('cms.create') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
        </portal>
        <div class="app-menu-index">
            <div class="uk-flex uk-text-muted">
                <div class="uk-width-1-10">
                    {{ $t('menus.id') }}
                </div>
                <div class="uk-width-1-10">
                    {{ $t('menus.state') }}
                </div>
                <div class="uk-width-3-10">
                    {{ $t('menus.title') }}
                </div>
                <div class="uk-width-3-10">
                    {{ $t('menus.package') }}
                </div>
            </div>
            <div>
                <app-menu-index-item ref="sortable" v-model="value"></app-menu-index-item>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-menu-index',
        props: {
            createRoute: {
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
                handle: 'div',
                items: 'li',
                toleranceElement: '> div',
                listType: 'ul'
            });

            console.log($(this.$refs.sortable.$el).nestedSortable('toArray', { startDepthCount: 0 }))

        }
    }
    liro.component(module.exports);
</script>
