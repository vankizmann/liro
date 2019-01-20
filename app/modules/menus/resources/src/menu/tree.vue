<template>

    <div class="liro-menu-tree">

        <div class="uk-margin-bottom uk-flex uk-flex-middle">

            <div class="uk-flex-auto uk-margin-small-right">
                <input type="search" class="uk-input uk-form-small" :placeholder="trans('theme::form.search.placeholder')">
            </div>

            <div class="uk-flex-none">
                <a href="javascript:void(0);" class="uk-button uk-button-small uk-button-primary" @click="openModal">
                    <span class="uk-icon-small" uk-icon="search"></span>
                    <span>{{ trans('theme::form.search.label') }}</span>
                </a>
            </div>

        </div>

        <liro-menu-tree-modal v-model="menu" ref="modal"></liro-menu-tree-modal>

        <div class="uk-flex uk-flex-middle">

            <div class="uk-flex-auto uk-margin-small-right">
                <span class="uk-text-small uk-text-muted">
                    {{ trans('liro-menus::form.legend.tree') }}
                </span>
            </div>

            <div class="uk-flex-none">
                <a href="javascript:void(0);" class="uk-button uk-button-small uk-button-success" @click="openModal">
                    <span class="uk-icon-small" uk-icon="plus"></span>
                    <span>{{ trans('theme::form.toolbar.create') }}</span>
                </a>
            </div>

        </div>


        <!-- Table start -->
        <vue-nestable v-model="type.menus" :threshold="50" :maxDepth="5">
            <vue-nestable-handle slot-scope="{ item }" :item="item" :data-id="item.id">
                <liro-menu-tree-item v-model="item" :collapsed="collapsed"></liro-menu-tree-item>
            </vue-nestable-handle>
        </vue-nestable>
        <!-- Table end -->

    </div>

</template>
<script>

    import IndexCollapsed from './index/collapsed';
    import TreeItem from './tree/item';
    import TreeModal from './tree/modal';

    export default {

        components: {
            'liro-menu-tree-item': TreeItem,
            'liro-menu-tree-modal': TreeModal
        },

        computed: {

            type: function () {
                return this.$root.type;
            },

            types: function () {
                return this.$root.types;
            }

        },

        data: function () {
            return {
                menu: {}
            }
        },

        created: function () {
            this.collapsed = new IndexCollapsed;
        },

        methods: {

            redirectType: function (type) {
                Liro.routes.redirect('liro-menus.admin.menu.index', {type: type});
            },

            updateMenuOrder: function () {

                var url = Liro.routes.get('liro-menus.ajax.menu.order', {
                    type: this.type.id
                });

                Axios.post(url, this.type).then(this.updateMenuOrderResponse);
            },

            updateMenuOrderResponse: function (res) {
                var message = Liro.messages.get('liro-menus::message.menu.ordered');
                UIkit.notification(message, 'success');
            },

            openModal: function () {
                this.$refs.modal.$emit('open');
            }

        }

    }

    if (window.Liro) {
        Liro.vue.component('liro-menu-tree', this.default);
    }

</script>

