<template>

<div class="liro-menu-index">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-menus.admin.menu.create')">
                {{ trans('liro-menus::admin.menu.create') }}
            </a>
        </div>
    </portal>

    <!-- Table start -->
    <div class="th-form is-reset">
        <div class="th-table uk-margin-remove-bottom">

            <!-- Table head -->
            <div class="th-table-head">
                <div class="th-table-tr uk-flex">

                    <!-- Type select -->
                    <div class="uk-width-medium uk-margin-auto-left">
                        <app-select :model="type.id" :placeholder="trans('liro-menus::form.menu.select_type')" @input="redirectType">
                            <app-select-option v-for="type in types" :key="type.id" :value="type.id" :label="type.title"></app-select-option>
                        </app-select>
                    </div>
                    <!-- Type select end -->

                </div>
            </div>
            <!-- Table head end -->

            <!-- Table filter -->
            <div class="th-table-filter">
                <div class="th-table-tr uk-flex">

                    <div class="th-table-td th-table-td-xs">
                        <span>
                            <!-- Placeholder -->
                        </span>
                    </div>

                    <div class="th-table-td uk-width-1-1">
                        <span>
                            {{ trans('liro-menus::form.menu.title') }}
                        </span>
                    </div>

                    <div class="th-table-td th-table-td-m uk-text-center">
                        <span>
                            {{ trans('liro-menus::form.menu.default') }}
                        </span>
                    </div>

                    <div class="th-table-td th-table-td-m uk-text-center">
                        <span>
                            {{ trans('liro-menus::form.menu.state') }}
                        </span>
                    </div>

                    <div class="th-table-td th-table-td-m uk-text-center">
                        <span>
                            {{ trans('liro-menus::form.menu.hide') }}
                        </span>
                    </div>

                    <div class="th-table-td th-table-td-m uk-text-center">
                        <span>
                            {{ trans('liro-menus::form.menu.id') }}
                        </span>
                    </div>

                </div>
            </div>
            <!-- Table filter end -->

            <!-- Table body -->
            <div class="th-table-body" v-show="type.menus.length != 0">
                <vue-nestable v-model="type.menus" :threshold="50" :maxDepth="5">
                    <vue-nestable-handle slot-scope="{ item }" :item="item" :data-id="item.id">
                        <liro-menu-index-item v-model="item" :collapsed="collapsed"></liro-menu-index-item>
                    </vue-nestable-handle>
                </vue-nestable>
            </div>
            <!-- Table body end -->

            <!-- Table body -->
            <div class="th-table-body" v-show="type.menus.length == 0">
                <div class="th-table-tr">
                    <div class="uk-text-center">
                        {{ trans('theme::form.list.empty') }}
                    </div>
                </div>
            </div>
            <!-- Table body end -->

            <!-- Table footer -->
            <div class="th-table-footer">
                <div class="th-table-tr uk-flex">
                    <div class="uk-margin-auto-left">
                        <a class="uk-button uk-button-small uk-button-success" href="javascript:void(0)" @click="updateMenuOrder" v-shortkey="['meta', 's']" @shortkey="updateMenuOrder">
                            {{ trans('theme::form.toolbar.save') }}
                        </a>
                    </div>
                </div>
            </div>
            <!-- Table footer end -->
            
        </div>
    </div>
    <!-- Table end -->

</div>

</template>
<script>

import IndexCollapsed from './index/collapsed';
import IndexItem from './index/item';

export default {

    computed: {

        type: function () {
            return this.$root.type;
        },

        types: function () {
            return this.$root.types;
        }

    },

    created: function () {
        this.collapsed = new IndexCollapsed;
    },

    methods: {

        redirectType: function (type) {
            Liro.routes.redirect('liro-menus.admin.menu.index', { type: type });
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
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-menu-index', this.default);
}

</script>

