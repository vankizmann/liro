<template>

<app-list class="liro-user-index" v-model="users" database="users.user.index">
    <div slot-scope="{ items, pages, config, order, search, paginate, filter, check }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-users.user.create')">
                    {{ Liro.messages.get('liro-users::module.user.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-table-container">
            <div class="th-table uk-margin-remove-bottom">

                <!-- Table head -->
                <div class="th-table-head">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-margin-auto-left">
                            <app-list-search
                                :columns="['name', 'email']" :config="config.search" @search="search"
                                :placeholder="Liro.messages.get('theme::form.search.placeholder')"
                            ></app-list-search>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="th-table-filter">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width-1-3">
                            <app-list-sort column="name" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.name') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-sort column="email" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.email') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-filter column="role_ids" :config="config.filter" :filters="roles" filters-value="id" filters-label="title" @filter="filter">
                                {{ Liro.messages.get('liro-users::form.user.role') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :config="config.filter" :filters="states" @filter="filter">
                                {{ Liro.messages.get('liro-users::form.user.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length != 0">
                    <liro-user-index-item v-for="(item, index) in items" :value="item" :key="index">
                        <app-list-checkbox slot="checkbox" :item="item" :config="config.checked" @check="check"></app-list-checkbox>
                    </liro-user-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length == 0">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width1-1 uk-text-center">
                            {{ Liro.messages.get('theme::form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="th-table-footer">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <app-list-pagination :pages="pages" :config="config.paginate" @paginate="paginate"></app-list-pagination>
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

    data: function () {
        return {
            states: this.Liro.data.get('states'),
            roles: this.Liro.data.get('roles'),
            users: this.Liro.data.get('users')
        };
    }

}

if (window.Liro) {
    Liro.vue.component('liro-user-index', this.default);
}

</script>

