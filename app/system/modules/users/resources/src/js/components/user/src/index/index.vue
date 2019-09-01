<template>
    <app-data-table :apis="apis" @row-dblclick="gotoEdit">
        <n-table-column v-for="(column, key) in columns" :key="key" v-bind="column" />
    </app-data-table>
</template>
<script>
    export default {

        name: 'liro-users-user-index',

        data()
        {
            let data = {};

            data.apis = {
                'index': ['user-index']
            };

            data.columns = {

                selection: {
                    prop: 'id', type: 'selection', align: 'center', fixedWidth: 45
                },

                id: {
                    prop: 'id', type: 'string', sort: true, filter: true, label: this.trans('liro-users::form.user.id')
                },

                state: {
                    prop: 'state', type: 'boolean', sort: true, filter: true, label: this.trans('liro-users::form.user.state')
                },

                email: {
                    prop: 'email', type: 'string', sort: true, filter: true, label: this.trans('liro-users::form.user.email')
                }

            };

            return data;
        },

        methods: {

            gotoEdit({ row })
            {
                let params = {
                    user: row.id
                };

                this.$router.push({
                    name: 'liro-users-user-edit', params
                });
            }

        }

    }
</script>
