<template>

<app-list class="liro-user-index" v-model="$root.users" database="users.user.index">
    <div slot-scope="{ items, config, methods }">

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
                            <app-list-search class="uk-display-inline-block" :columns="['name', 'email']" :placeholder="Liro.messages.get('theme::form.search.placeholder')" :config="config" :methods="methods"></app-list-search>
                        </div>

                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="th-table-filter">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="th-table-td th-table-td-xs">
                            <app-list-select-all class="uk-display-inline-block uk-margin-right" :config="config" :methods="methods"></app-list-select-all>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-sort column="name" :config="config" :methods="methods">
                                {{ Liro.messages.get('liro-users::form.user.name') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-sort column="email" :config="config" :methods="methods">
                                {{ Liro.messages.get('liro-users::form.user.email') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-3">
                            <app-list-filter column="role_ids" :filters="$root.roles" filters-value="id" filters-label="title" :config="config" :methods="methods">
                                {{ Liro.messages.get('liro-users::form.user.role') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :filters="$root.states" :config="config" :methods="methods">
                                {{ Liro.messages.get('liro-users::form.user.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id" :config="config" :methods="methods">
                                {{ Liro.messages.get('liro-users::form.user.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length != 0">
                    <liro-user-index-item v-for="(item, index) in items" :value="item" :key="index">
                        <app-list-select slot="checkbox" :value="item.id" :config="config" :methods="methods"></app-list-select>
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
                        <app-list-pagination :config="config" :methods="methods"></app-list-pagination>
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
    
    mounted: function () {
        Liro.events.emit('roles@sync');
        Liro.events.emit('users@sync');
    }
}

if (window.Liro) {

    Liro.vue.sync('users', {
        url: Liro.routes.get('liro-users.api.user.index'), default: []
    });

    Liro.vue.sync('roles', {
        url: Liro.routes.get('liro-users.api.role.index'), default: []
    });

    Liro.vue.component('liro-user-index', this.default);
}

</script>

