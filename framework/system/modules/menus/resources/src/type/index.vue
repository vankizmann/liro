<template>

<app-list class="liro-type-index" v-model="types" database="menus.type.index">
    <div slot-scope="{ items }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="route('liro-menus.admin.type.create')">
                    {{ trans('liro-menus::admin.type.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-reset">
            <div class="th-table uk-margin-remove-bottom">

                <!-- Table head -->
                <div class="th-table-head">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-margin-auto-left">
                            <app-list-search :columns="['title', 'route']" :placeholder="trans('theme::form.search.placeholder')"></app-list-search>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="th-table-filter">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="th-table-td th-table-td-xs">
                            <app-list-select-all class="uk-display-inline-block uk-margin-right"></app-list-select-all>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="title">
                                {{ trans('liro-menus::form.type.title') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="theme">
                                {{ trans('liro-menus::form.type.theme') }}
                            </app-list-sort>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :filters="states">
                                {{ trans('liro-menus::form.type.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id">
                                {{ trans('liro-menus::form.type.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length != 0">
                    <liro-type-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-type-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length == 0">
                    <div class="th-table-tr">
                        <div class="uk-width-1-1 uk-text-center">
                            {{ trans('theme::form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="th-table-footer">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <app-list-pagination></app-list-pagination>
                    </div>
                </div>
                
            </div>
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

