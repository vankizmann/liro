<template>
    <div class="uk-form uk-form-stacked">

       <!-- Infobar start -->
        <portal to="app-infobar-right">
            <app-toolbar-link class="uk-success" icon="plus" :href="createRoute">
                {{ $t('liro-menus.toolbar.create') }}
            </app-toolbar-link>
            <app-toolbar-link uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Infobar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>{{ $t('liro-menus.toolbar.help') }}</h1>
        </portal>
        <!-- Help end -->

        <!-- Title start -->
        <div class="uk-margin-large">
            <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-menus.backend.menus.index') }}</h1>
        </div>
        <!-- Title end -->

        <ul uk-tab>
            <li v-for="(type, index) in types" :key="index"><a href="#" @click.prevent="tab = type.id">{{ type.title }}</a></li>
        </ul>

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
            <app-menu-index-list ref="dropzone" v-if="active" v-model="active.menu_tree"></app-menu-index-list>
        </div>

    </div>
</template>
<script>
    export default {
        computed: {
            active() {
                return _.find(this.types, { id: this.tab });
            },
            activeIndex() {
                return _.findIndex(this.types, { id: this.tab });
            }
        },
        props: {

            createRoute: {
                default() {
                    return '';
                },
                type: String
            },

            orderRoute: {
                default() {
                    return '';
                },
                type: String
            },

            menus: {
                default() {
                    return this.$liro.data.get('menus', []);
                },
                type: [Array, Object]
            },

            types: {
                default() {
                    return this.$liro.data.get('types', []);
                },
                type: [Array, Object]
            }

        },

        data() {

            return {
                tab: 1
            }

        },

        mounted() {

            $(this.$refs.dropzone.$el).on('end', () => {
                this.$http.post(this.orderRoute, { type: this.active.id, menus: this.active.menu_tree });
            });

        }

    }
    liro.vue.$component('app-menus-index', this.default);
</script>
