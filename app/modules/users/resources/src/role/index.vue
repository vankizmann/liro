<template>

<app-list class="liro-role-index" v-model="roles" database="users.role.index">
    <div slot-scope="{ items, pages, config, order, search, paginate, filter }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-users.role.create')">
                    {{ Liro.messages.get('liro-users::module.role.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-table">
            <table class="uk-table uk-table-divider uk-table-middle uk-margin-remove-bottom">

                <!-- Table head -->
                <thead>
                    <tr>
                        <th class="uk-width-1-3">
                            <app-list-sort column="title" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.role.title') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <app-list-sort column="description" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.role.description') }}
                            </app-list-sort>
                        </th>
                        <th class="uk-width-1-3">
                            <span>
                                {{ Liro.messages.get('liro-users::form.role.routes') }}
                            </span>
                        </th>
                        <th class="uk-width-small uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-users::form.role.id') }}
                            </app-list-sort>
                        </th>
                    </tr>
                </thead>
                <!-- Table head end -->

                <!-- Table body -->
                <tbody v-if="items.length != 0">
                    <liro-role-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-role-index-item>
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
            roles: this.Liro.data.get('roles')
        };
    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-index', this.default);
}

</script>

