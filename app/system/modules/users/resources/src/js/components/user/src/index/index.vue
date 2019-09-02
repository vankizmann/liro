<template>
    <n-datatable v-bind="queries" :search-columns="['email', 'name']">

        <n-table-column type="selection" :label="trans('form.table.selection')" align="center" :fixed-width="45">
            <!-- Selection -->
        </n-table-column>

        <n-table-column prop="name" type="string" :label="trans('liro-users::form.user.name')" :default-width="200" :sort="true" :filter="true">
            <router-link slot-scope="{ row }" :to="getEditRoute(row)">
                {{ row.name }}
            </router-link>
        </n-table-column>

        <n-table-column prop="email" type="string" :label="trans('liro-users::form.user.email')" :default-width="200" :sort="true" :filter="true">
            <!-- E-Mail -->
        </n-table-column>

        <n-table-column prop="state" type="boolean" :label="trans('liro-users::form.user.state')" :default-width="50" :sort="true" :filter="true">
            <!-- State -->
        </n-table-column>

        <n-table-column prop="id" type="boolean" :label="trans('liro-users::form.user.id')" :default-width="50" :sort="true">
            <!-- ID -->
        </n-table-column>

    </n-datatable>
</template>
<script>
    export default {

        name: 'liro-users-user-index',

        data()
        {
            let queries = {
                indexQuery: ['user-index'],
                deleteQuery: ['user-delete']
            };

            return { queries };
        },

        methods: {

            getEditRoute(row)
            {
                let params = {
                    user: row.id
                };

                return {
                    name: 'liro-users-user-edit', params
                };
            }

        }

    }
</script>
