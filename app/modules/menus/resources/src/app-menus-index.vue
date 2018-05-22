<template>
    <div class="uk-form uk-form-stacked">

       <!-- Infobar start -->
        <portal to="app-infobar-action">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('liro-menus.toolbar.create') }}
            </app-toolbar-link>
            <app-toolbar-link class="uk-icon-default" icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Infobar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>{{ $t('liro-menus.toolbar.help') }}</h1>
        </portal>
        <!-- Help end -->

        <div class="uk-flex uk-flex-middle uk-padding">

            <!-- Title start -->
            <div>
                <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-menus.backend.menus.index') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Search start -->
            <div style="width: 300px; margin-left: auto;">
                <app-form-select class="uk-margin-remove" :options="types" option-label="title" option-value="id" v-model="tab"></app-form-select>
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
            <app-menu-index-list v-if="active" v-model="active.menu_tree"></app-menu-index-list>
        </div>

    </div>
</template>
<script>
    module.exports = {
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
                default: '',
                type: String
            },
            orderRoute: {
                default: '',
                type: String
            },
            menus: {
                default() {
                    return [];
                },
                type: Array
            },
            types: {
                default() {
                    return [];
                },
                type: Array
            }
        },
        data() {
            return {
                tab: 1
            }
        },
        mounted() {

            $('body').on('end', () => {
                this.$http.post(this.orderRoute, { type: this.active.id, menus: this.active.menu_tree });
            });

        }
    }
    liro.vue.$component('app-menus-index', module.exports);
</script>
