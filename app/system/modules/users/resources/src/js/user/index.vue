<template>

    <app-loader :load="loadUsers === true && loadRoles === true">
        <app-list-builder :list="this.users" :columns="this.columns" :search="['name', 'email']" :selected.sync="selected">
            <template slot="column.name" slot-scope="{ item }">
                <a :href="routes.get('liro-users.admin.user.edit', { user: item.id })">
                    <span>{{ item.name }}</span>
                </a>
            </template>
        </app-list-builder>
    </app-loader>

</template>
<script>

    export default {

        data: function () {

            let columns = [
                {
                    type: 'checkbox',
                    prop: 'id',
                    class: 'table__td--xs text--center'
                },
                {
                    type: 'order',
                    prop: 'name',
                    label: this.trans('Name'),
                    class: 'col--1-3'
                },
                {
                    type: 'order',
                    prop: 'email',
                    label: this.trans('Email'),
                    class: 'col--1-3'
                },
                {
                    type: 'filter',
                    prop: 'role_ids',
                    label: this.trans('Roles'),
                    class: 'col--1-3',
                    filter: {
                        data: () => this.roles, label: 'title', value: 'id'
                    }
                },
                {
                    type: 'order',
                    label: this.trans('Id'),
                    prop: 'id',
                    class: 'table__td--sm text--center'
                }
            ];

            return {
                loadUsers: false, loadRoles: false,
                action: '', selected: [], columns: columns,
                ...this.liro.vue.bind(['state-index', 'states'], this),
                ...this.liro.vue.bind(['user-index', 'users'], this),
                ...this.liro.vue.bind(['role-index', 'roles'], this)
            }
        },

        beforeCreate: function () {

            if ( ! this.liro.storage.has('user-index') ) {

                this.$on('hook:created', () => {
                    this.loadUsers = true;
                });

                this.liro.ajax.call('user-index').then(() => this.loadUsers = false);
            }

            if ( ! this.liro.storage.has('role-index') ) {

                this.$on('hook:created', () => {
                    this.loadRoles = true;
                });

                this.liro.ajax.call('role-index').then(() => this.loadRoles = false);
            }

        }

    }

</script>

