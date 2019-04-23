<template>
    <div>
        <el-table :data="entities.data" @sort-change="test">
            <el-table-column
                type="selection" width="55">
            </el-table-column>
            <el-table-column
                prop="name" label="Name" sortable="custom">
                <template slot-scope="scope">
                    <router-link :to="{ name: 'liro-users-user-edit', params: { user: scope.row.id } }">
                        {{ scope.row.name }}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="email" column-key="email" label="E-Mail" sortable="custom">
                <template slot="header" slot-scope="scope">
                    <span>{{ scope.column.label }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="updated_at" column-key="updated_at" label="Zuletzt bearbeitet" sortable="custom">
            </el-table-column>
            <el-table-column
                prop="id" label="ID" :width="80" sortable="custom">
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="sizeChange" @current-change="currentChange"
            :current-page="entities.current_page" :page-size="entities.per_page"
            layout="sizes, ->, total, ->, prev, pager, next"
            :total="entities.total" :background="true" :page-sizes="[10, 20, 50, 100, 250, 500]">
        </el-pagination>
    </div>
</template>
<script lang="ts">

    declare var _ : any;

    export default {

        props: ['id'],

        data() {
            return { entities: {} }
        },

        mounted() {
            this.ux.ajax.call(['user-index', 'users'], true)
                .then((res) => this.entities = res.data);
        },

        watch: {
            $route() {
                this.entities = this.ux.data.get('users', {})
            }
        },

        methods: {
            sizeChange(size) {

                let params : any = {
                    size: size
                };

                if ( _.has(this, 'entities.current_page') ) {
                    params.page = this.entities.current_page;
                }

                this.ux.ajax.call(['user-index', 'users'], true, params)
                    .then((res) => this.entities = res.data);
            },
            currentChange(page) {

                let params : any = {
                    page: page
                };

                if ( _.has(this, 'entities.per_page') ) {
                    params.size = this.entities.per_page;
                }

                this.ux.ajax.call(['user-index', 'users'], true, params)
                    .then((res) => this.entities = res.data);
            },
            test(options) {

                let params : any = {};

                if ( options.order !== null ) {
                    params.column = options.prop;
                }

                if ( options.order === 'descending' ) {
                    params.order = 'desc';
                }

                if ( options.order === 'ascending' ) {
                    params.order = 'asc';
                }

                this.ux.ajax.call(['user-index', 'users'], true, params)
                    .then((res) => this.entities = res.data);
            },
            foobar(col, ...args) {
                console.log('foobar', col, args)
            }
        }

    }

</script>
