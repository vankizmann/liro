<template>

<div class="liro-menu-index" ref="el">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <!-- Create item link -->
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-menus.menu.create')">
                {{ Liro.messages.get('liro-menus::module.menu.create') }}
            </a>
            <!-- Create item link end -->

        </div>
    </portal>

    <!-- Table start -->
    <div class="th-table-container">
        <div class="th-table uk-margin-remove-bottom">

            <!-- Table head -->
            <div class="th-table-head">
                <div class="th-table-tr uk-flex">

                    <!-- Type select -->
                    <div class="uk-width-medium uk-margin-auto-left">
                        <app-form-select class="uk-margin-remove-bottom" :value="active.id" :options="types" options-value="id" options-label="title" @input="redirectType"></app-form-select>
                    </div>
                    <!-- Type select end -->

                </div>
            </div>
            <!-- Table head end -->

            <!-- Table filter -->
            <div class="th-table-filter">
                <div class="th-table-tr uk-flex">

                    <div class="th-table-td uk-flex-1">
                        <span>
                            {{ Liro.messages.get('liro-menus::form.menu.title') }}
                        </span>
                    </div>

                    <div class="th-table-td uk-width-medium">
                        <span>
                            {{ Liro.messages.get('liro-menus::form.menu.route') }}
                        </span>
                    </div>

                    <div class="th-table-td uk-width-small uk-text-center">
                        <span>
                            {{ Liro.messages.get('liro-menus::form.menu.state') }}
                        </span>
                    </div>

                    <div class="th-table-td uk-width-small uk-text-center">
                        <span>
                            {{ Liro.messages.get('liro-menus::form.menu.hide') }}
                        </span>
                    </div>

                    <div class="th-table-td uk-width-small uk-text-center">
                        <span>
                            {{ Liro.messages.get('liro-menus::form.menu.id') }}
                        </span>
                    </div>

                </div>
            </div>
            <!-- Table filter end -->

            <!-- Table body -->
            <div class="th-table-body" v-if="menus.length != 0">
                <vue-nestable v-model="menus" :threshold="50" :maxDepth="5">
                    <vue-nestable-handle slot-scope="{ item }" :item="item" :data-id="item.id">
                        <liro-menu-index-item v-model="item" :collapsed="collapsed"></liro-menu-index-item>
                    </vue-nestable-handle>
                </vue-nestable>
            </div>
            <!-- Table body end -->

            <!-- Table body -->
            <div class="th-table-body" v-if="menus.length == 0">
                <div class="th-table-tr">
                    <div class="uk-text-center">
                        {{ Liro.messages.get('theme::form.list.empty') }}
                    </div>
                </div>
            </div>
            <!-- Table body end -->

            <!-- Table footer -->
            <div class="th-table-footer">
                <div class="th-table-tr uk-flex">
                    <div class="uk-margin-auto-left">
                        <a class="uk-button uk-button-small uk-button-success" href="javascript:void(0)" @click="updateMenuOrder" v-shortkey="['meta', 's']" @shortkey="updateMenuOrder">
                            {{ Liro.messages.get('theme::form.toolbar.save') }}
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

    /**
     * Get data from liro framework
     */
    data: function () {
        return {
            states: this.Liro.data.get('states'),
            hides: this.Liro.data.get('hides'),
            types: this.Liro.data.get('types'),
            active: this.Liro.data.get('active'),
            menus: this.Liro.data.get('menus')
        };
    },

    /**
     * Create new collapsed instance on creation
     */
    created: function () {
        this.collapsed = new IndexCollapsed;
    },

    methods: {

        /**
         * Redirect to type on select change
         */
        redirectType: function (type) {
            Liro.routes.redirect('liro-menus.menu.index', { type: type });
        },

        /**
         * Submit ajax request and store order and routes
         */
        updateMenuOrder: function () {

            var url = Liro.routes.get('liro-menus.menu.index', {
                type: this.active.id
            });

            Axios.post(url, { menus: this.menus }).then(this.updateMenuOrderResponse);
        },

        /**
         * Show success message
         */
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

