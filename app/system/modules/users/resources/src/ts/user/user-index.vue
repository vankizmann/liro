<template>
    <div>
        <div class="grid grid--row grid--10">
            <div class="col">
                <el-input :placeholder="trans('el.search.placeholder')" v-model="search" :clearable="true" @keyup.enter.native="searchChange(search)" @clear="searchChange('')" />
            </div>
            <div class="col col--left">
                <el-button type="primary" @click="searchChange(search)" icon="el-icon-search">
                    {{ trans('el.search.button') }}
                </el-button>
            </div>
            <div class="col col--right">
                <el-button type="secondary" @click="searchChange(search)" icon="el-icon-delete" :disabled="selected.length === 0">
                    {{ trans('el.table.delete') }}
                </el-button>
            </div>
        </div>
        <el-table ref="table" :data="entities.data" @sort-change="sortChange" @filter-change="filterChange" @selection-change="selectionChange" :key="key">
            <el-table-column
                prop="id" type="selection" width="55">
            </el-table-column>
            <el-table-column
                column-key="name" prop="name" label="Name" :filters="[{ text: 'Administrator', value: 'Administrator' }]">
                <template slot="header" slot-scope="{ column }">
                    <span class="el-table__column-label">{{ column.label }}</span>
                </template>
                <template slot-scope="scope">
                    <router-link :to="{ name: 'liro-users-user-edit', params: { user: scope.row.id } }">
                        {{ scope.row.name }}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="email" column-key="email" label="E-Mail" sortable="custom">
                <template slot="header" slot-scope="{ column }">
                    <span class="el-table__column-label">{{ column.label }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="updated_at" column-key="updated_at" label="Zuletzt bearbeitet" sortable="custom">
                <template slot="header" slot-scope="{ column }">
                    <span class="el-table__column-label">{{ column.label }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="id" label="ID" :width="80" sortable="custom">
                <template slot="header" slot-scope="{ column }">
                    <span class="el-table__column-label">{{ column.label }}</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="limitChange" @current-change="pageChange"
            :current-page="query.paginate.page" :page-size="query.paginate.limit"
            layout="sizes, ->, total, ->, prev, pager, next"
            :total="query.paginate.total" :background="true" :page-sizes="[10, 25, 50, 100, 250, 500]">
        </el-pagination>
    </div>
</template>
<script lang="ts">

    declare var _ : any;

    let query = {
        search: {
            query: '', columns: ['id', 'email', 'name']
        },
        order: {
            direction: 'desc', column: 'id'
        },
        paginate: {
            page: 1, limit: 10, total: 0,
        },
        filters: {
            // email: ['admin@gmail.com']
        },
    };

    export default {

        props: ['id'],

        data() {
            return { key: 0, search: '', selected: [], query: _.assign({}, query), entities: {} }
        },

        mounted() {

            this.$watch('entities.per_page', (value) => {
                this.query.paginate.limit = value;
            });

            this.$watch('entities.current_page', (value) => {
                this.query.paginate.page = value;
            });

            this.$watch('entities.total', (value) => {
                this.query.paginate.total = value;
            });

            this.queryData();
        },

        watch: {
            $route() {
                this.$refs.table.clearSelection();
                this.entities = this.ux.data.get('users', {});
            }
        },

        methods: {
            queryData(override : any = null) {

                let params : any = _.merge({}, override || this.query);

                this.ux.ajax.call(['user-index', 'users'], true, this.query = params)
                    .then((res) => this.entities = res.data);
            },
            searchChange(query) {

                let params : any = _.merge({}, this.query, {
                    search: { query: query }
                });

                this.queryData(params);
            },
            limitChange(limit) {

                let params : any = _.merge({}, this.query, {
                    paginate: { limit: limit }
                });

                this.queryData(params);
            },
            filterChange(filter) {

                let params : any = _.merge({}, this.query);

                _.each(filter, (values, key) => {
                    params.filters[key] = _.merge([], values);
                });

                this.queryData(params);
            },
            pageChange(page) {

                let params : any = _.merge({}, this.query, {
                    paginate: { page: page }
                });

                this.queryData(params);
            },
            sortChange(options) {

                let params : any = _.merge({}, this.query, {
                    order: query.order
                });

                if ( options.prop !== null ) {
                    params.order.column = options.prop;
                }

                if ( options.order === 'descending' ) {
                    params.order.direction = 'desc';
                }

                if ( options.order === 'ascending' ) {
                    params.order.direction = 'asc';
                }

                this.queryData(params);
            },
            selectionChange(selected) {
                this.selected = selected;
            }
        }

    }

</script>
