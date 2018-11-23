<template>

<app-list class="liro-type-index" v-model="types" database="menus.type.index">
    <div slot-scope="{ items, pages, config, order, search, paginate, filter }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-menus.type.create')">
                    {{ Liro.messages.get('liro-menus::module.type.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-table">
            <table class="uk-table uk-table-divider uk-table-middle uk-margin-remove-bottom">

                <!-- Table head -->
                <thead>
                    <tr>
                        <th class="uk-width-small">
                            <app-list-filter column="state" :config="config.filter" :filters="states" @filter="filter">
                                {{ Liro.messages.get('liro-menus::form.type.state') }}
                            </app-list-filter>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="title" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-menus::form.type.title') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="route" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-menus::form.type.route') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="theme" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-menus::form.type.theme') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-small uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-menus::form.type.id') }}
                            </app-list-sort>
                        </th>
                    </tr>
                </thead>
                <!-- Table head end -->

                <!-- Table body -->
                <tbody v-if="items.length != 0">
                    <liro-type-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-type-index-item>
                </tbody>
                <!-- Table body end -->

                <!-- Table body -->
                <tbody v-if="items.length == 0">
                    <tr>
                        <td colspan="5" class="uk-text-center">
                            {{ Liro.messages.get('theme::form.list.empty') }}
                        </td>
                    </tr>
                </tbody>
                <!-- Table body end -->

                <tfoot>
                    <tr>
                        <td colspan="5">
                            <app-list-pagination :pages="pages" :config="config.paginate" @paginate="paginate"></app-list-pagination>
                        </td>
                    </tr>
                </tfoot>
                
            </table>
        </div>
        <!-- Table end -->

    </div>
</app-list>

</template>
<script>

import IndexItem from './index/item';

export default {

    /**
     * Get data from liro framework
     */
    data: function () {
        return {
            states: Liro.data.get('states'),
            types: Liro.data.get('types')
        };
    }

}

if (window.Liro) {
    Liro.vue.component('liro-type-index', this.default);
}

</script>

