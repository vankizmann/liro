<template>

<app-list class="liro-role-index" v-model="roles" database="users.role.index">
    <div slot-scope="{ items, config, methods }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-users.admin.role.create')">
                    {{ Liro.messages.get('liro-users::module.role.create') }}
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
                                :columns="['title', 'route']" :config="config.search" @search="methods.search"
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
                            <app-list-sort column="title" :config="config.order" @order="methods.order">
                                {{ Liro.messages.get('liro-users::form.role.title') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-sort column="description" :config="config.order" @order="methods.order">
                                {{ Liro.messages.get('liro-users::form.role.description') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <span>
                                {{ Liro.messages.get('liro-users::form.role.routes') }}
                            </span>
                        </div>
                        <div class="uk-width-small uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="methods.order">
                                {{ Liro.messages.get('liro-users::form.role.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length != 0">
                    <liro-role-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-role-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length == 0">
                    <div class="th-table-tr">
                        <div class="uk-width-1-1 uk-text-center">
                            {{ Liro.messages.get('theme::form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="th-table-footer">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <app-list-pagination :config="config.paginate" @paginate="methods.paginate"></app-list-pagination>
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

