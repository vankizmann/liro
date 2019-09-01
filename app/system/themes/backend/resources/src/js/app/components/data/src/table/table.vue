<template>
    <NLoader :visible="load" class="app-data-table">
        <NTable ref="table" :items="Obj.get(request, 'data', [])" :adapt-height="false" :default-sort-dir="sort.dir" :default-sort-prop="sort.prop" v-on="$listeners">
            <slot></slot>
        </NTable>
        <NPaginator v-bind="paginate" :total="Obj.get(request, 'total', 0)" :limit-options="[15, 25, 50, 100, 500]" @paginate="onPaginate" />
    </NLoader>
</template>
<script>
    export default {

        name: 'app-data-table',

        props: {

            apis: {
                default()
                {
                    return {};
                },
                type: [Object]
            }

        },

        data()
        {
            let paginate = {
                limit: 15, page: 1
            };

            let sort = {
                prop: 'id', dir: 'desc'
            };

            return { load: false, request: null, filter: [], paginate, sort };
        },

        mounted()
        {
            this.queryIndex();

            this.$refs.table.$on('sort',
                this.Any.debounce(this.onSort, 100));

            this.$refs.table.$on('filter',
                this.Any.debounce(this.onFilter, 500));
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

            onFilter(filter)
            {
                this.filter = filter;

                this.queryIndex();
            },

            queryIndex()
            {
                let api = this.Obj.get(this.apis, 'index');

                if ( api === null ) {
                    return;
                }

                let query = {
                    paginate: this.paginate, sort: this.sort, filter: this.filter
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
