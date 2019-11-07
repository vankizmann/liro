<template>
    <NLoader :visible="load" class="n-datatable">
        <div class="n-datatable__header grid grid--row grid--10">
            <div class="n-datatable__create grid--col">
                <NButton type="primary" :round="true" :outline="false" @click="$emit('create')">
                    {{ trans('Create') }}
                </NButton>
            </div>
            <div class="n-datatable__delete grid--col">
                <NButton type="danger" :round="true" :outline="true" @click="$emit('delete')">
                    {{ trans('Delete') }}
                </NButton>
            </div>
            <div class="n-datatable__spacer col--flex-auto">
                <span></span>
            </div>
            <div class="n-datatable__search grid--col">
                <NInput :value="search.query" @input="(input) => $emit('search', input)" :placeholder="trans('Search')" :round="true" icon="fa fa-times" :icon-disabled="Any.isEmpty(search.query)" @icon-click="$emit('search', '')"
                />
            </div>
        </div>
        <div class="n-datatable__body">
            <NTable ref="table" :items="Obj.get(request, 'data', [])" :adapt-height="false" :sort-dir="sort.dir" :sort-prop="sort.prop" v-on="$listeners">
                <slot></slot>
            </NTable>
        </div>
        <div class="n-datatable__footer">
            <NPaginator v-bind="paginate" :page="Obj.get(request, 'page', 1)" :total="Obj.get(request, 'total', 0)" :limit-options="limitOptions" @paginate="onPaginate" v-on="$listeners" />
        </div>
    </NLoader>
</template>
<script>
    export default {

        name: 'NDatatable',

        props: {

            indexQuery: {
                default()
                {
                    return null;
                }
            },

            deleteQuery: {
                default()
                {
                    return null;
                }
            },

            searchColumns: {
                default()
                {
                    return [];
                },
                type: [Array]
            },

            limitOptions: {
                default()
                {
                    return [10, 20, 50, 100, 500];
                },
                type: [Array]
            }

        },

        data()
        {
            let search = {
                query: '', columns: this.searchColumns
            };

            let paginate = {
                limit: 15, page: 1
            };

            let sort = {
                prop: 'id', dir: 'desc'
            };

            return { load: false, request: null, filter: [], search, paginate, sort };
        },

        mounted()
        {
            this.queryIndex();

            this.$refs.table.$on('sort',
                this.Any.debounce(this.onSort, 100));

            this.$refs.table.$on('filter',
                this.Any.debounce(this.onFilter, 500));

            this.$on('search',
                this.Any.debounce(this.onSearch, 500))
        },

        watch: {

            request()
            {
                this.paginate = this.Obj.only(this.request, [
                    'page', 'limit'
                ]);

                this.$refs.table.clearSelectedKeys();
            }

        },

        methods: {

            onPaginate(paginate)
            {
                this.paginate = paginate;

                this.queryIndex();
            },

            onSort(prop, dir)
            {
                this.sort = {
                    prop: prop, dir: dir
                };

                this.queryIndex();
            },

            onSearch(search)
            {
                this.search = {
                    query: search, columns: this.searchColumns
                };

                this.queryIndex();
            },

            onFilter(filter)
            {
                this.filter = filter;

                this.queryIndex();
            },

            queryIndex()
            {
                let api = this.indexQuery;

                if ( api === null ) {
                    return;
                }

                let query = {
                    search: this.search, paginate: this.paginate, sort: this.sort, filter: this.filter
                };

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.Ajax.call(api, true, query, options)
                    .then((res) => this.request = res.data);
            }

        }

    }
</script>
