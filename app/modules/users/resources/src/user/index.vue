<template>

<app-list class="liro-user-index" v-model="users" database="users.user.index">
    <div slot-scope="{ items }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="route('liro-users.admin.user.create')">
                    {{ trans('liro-users::module.user.create') }}
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
                            <app-list-search class="uk-display-inline-block" :columns="['name', 'email']" :placeholder="trans('theme::form.search.placeholder')"></app-list-search>
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
                        <div class="uk-width-1-3">
                            <app-list-sort column="name">
                                {{ trans('liro-users::form.user.name') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-sort column="email">
                                {{ trans('liro-users::form.user.email') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-filter column="role_ids" :filters="roles" filters-value="id" filters-label="title">
                                {{ trans('liro-users::form.user.role') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :filters="states">
                                {{ trans('liro-users::form.user.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id">
                                {{ trans('liro-users::form.user.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length != 0">
                    <liro-user-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-user-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length == 0">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width1-1 uk-text-center">
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

        states: function () {
            return this.$root.states;
        },

        roles: function () {
            return this.$root.roles;
        },

        users: function () {
            return this.$root.users;
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-user-index', this.default);
}

</script>

