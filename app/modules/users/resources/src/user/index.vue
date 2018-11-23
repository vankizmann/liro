<template>

<app-list class="liro-user-index" v-model="users" database="users.user.index">
    <div slot-scope="{ items, pages, config, order, search, paginate, filter }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-users.user.create')">
                    {{ Liro.messages.get('liro-users::module.user.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-table">
            <table class="uk-table uk-table-divider uk-table-middle uk-margin-remove-bottom">

                <!-- Table head -->
                <thead>
                    <tr>
                        <th class="uk-width-small uk-text-center">
                            <app-list-filter column="state" :config="config.filter" :filters="states" @filter="filter">
                                {{ Liro.messages.get('liro-users::form.user.state') }}
                            </app-list-filter>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="name" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.name') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="email" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.email') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-filter column="role_ids" :config="config.filter" :filters="roles" filters-value="id" filters-label="title" @filter="filter">
                                {{ Liro.messages.get('liro-users::form.user.role') }}
                            </app-list-filter>
                        </th>
                        <th class="uk-width-small uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.user.id') }}
                            </app-list-sort>
                        </th>
                    </tr>
                </thead>
                <!-- Table head end -->

                <!-- Table body -->
                <tbody v-if="items.length != 0">
                    <liro-user-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-user-index-item>
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

