<template>

<app-list class="liro-role-index" v-model="roles" database="users.role.index">
    <div slot-scope="{ items }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="route('liro-users.admin.role.create')">
                    {{ trans('liro-users::module.role.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-table">
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
                                {{ trans('liro-users::form.role.title') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="description">
                                {{ trans('liro-users::form.role.description') }}
                            </app-list-sort>
                        </div>
                        <div class="th-table-td th-table-td-l uk-text-center">
                            <span>
                                {{ trans('liro-users::form.role.routes') }}
                            </span>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id">
                                {{ trans('liro-users::form.role.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length != 0">
                    <liro-role-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-role-index-item>
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

    computed: {

        roles: function () {
            return this.$root.roles;
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-index', this.default);
}

</script>

