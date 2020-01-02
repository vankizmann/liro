<template>
    <NLoader :visible="load" class="web-menu-index full-height full-height--fixed auto-height-child">

        <div class="grid grid--col">

            <div class="web-body-item col--flex-none">
                <WebBackendTitle :info="trans('An overview of all menu items registered in your webpage')">

                    <div class="grid grid--row grid--10">

                        <div class="col--auto">
                            <NButton type="primary" :icon="icons.create" @click="">
                                {{ trans('Create') }}
                            </NButton>
                        </div>

                        <div class="col--auto">
                            <NButton type="secondary" :square="true" :icon="icons.action" :disabled="! selected.length">
                                <!-- Icon -->
                            </NButton>
                            <NPopover type="select" trigger="click" position="bottom-end" :width="220" :disabled="! selected.length">

                                <NButton class="n-popover-option" type="primary" :link="true" :icon="icons.delete">
                                    {{ trans('Archive') }}
                                </NButton>
                                <NConfirm type="primary" @confirm="deleteEntities">
                                    {{ choice('Do you want to archive :count items?', selected.length) }}
                                </NConfirm>

                                <NButton class="n-popover-option" type="danger" :link="true" :icon="icons.delete">
                                    {{ trans('Delete') }}
                                </NButton>
                                <NConfirm type="danger" @confirm="deleteEntities">
                                    {{ choice('Do you want to delete :count items?', selected.length) }}
                                </NConfirm>

                            </NPopover>
                        </div>


                    </div>

                </WebBackendTitle>
            </div>

            <div class="web-body-item col--flex-fixed">
                <NTable ref="table" unique-prop="id" :selected-keys.sync="selected" v-model="request.data" :sort-prop="sort.prop" :sort-dir="sort.dir" :filter-props="Obj.values(filter)" :adapt-height="true" @sort="setSorting" @row-dblclick="navigate">

                    <NTableColumn type="selection" :fixed-width="45" align="center" :label="trans('Selection')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="state" type="option" options-label="$value.label" options-value="$value.value" :options="states" :sort="true" :filter="true" :label="trans('State')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="title" :sort="true" :filter="true" :label="trans('Title')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="slug" :sort="true" :filter="true" :label="trans('Slug')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="type" :sort="true" :filter="true" :label="trans('Type')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="updated_at" type="datetime" :sort="true" :label="trans('Updated')">
                        <!-- ID -->
                    </NTableColumn>

                    <NTableColumn prop="created_at" type="datetime" :sort="true" :label="trans('Created')">
                        <!-- ID -->
                    </NTableColumn>

                </NTable>
            </div>

            <div class="web-body-item col--flex--none">
                <NPaginator :page.sync="request.page" :limit.sync="request.limit" :total="request.total" @paginate="fetchEntities" :limit-options="[50, 100, 500]" />
            </div>
        </div>
    </NLoader>
</template>
<script>
    export default {

        name: 'WebMenuIndex',

        data()
        {
            let request = {
                data: [], page: 1, limit: 50, total: 0
            };

            let filter = [
                // Default filters
            ];

            if ( this.Cookie.get('web-menu-index|filter') ) {
                filter = this.Str.objectify(
                    this.Cookie.get('web-menu-index|filter')
                );
            }

            let sort = {
                prop: 'updated_at', dir: 'desc'
            };

            if ( this.Cookie.get('web-menu-index|sort') ) {
                sort = this.Str.objectify(
                    this.Cookie.get('web-menu-index|sort')
                );
            }

            let states = [
                { value: '1', label: this.trans('Active') },
                { value: '0', label: this.trans('Inactive') },
                { value: '2', label: this.trans('Archived') },
            ];

            return { request, sort, filter, states, selected: [], load: true };
        },

        mounted()
        {
            this.$refs.table.$on('filter',
                this.Any.debounce(this.setFiltering, 600));

            if ( this.Data.has('web-menu-index') ) {
                return this.preloadEntities();
            }

            this.fetchEntities();
        },

        watch: {

            request()
            {
                this.Data.set('web-menu-index', this.request);
            },

            sort()
            {
                this.Cookie.set('web-menu-index|sort',
                    this.Str.stringify(this.sort));
            },

            filter()
            {
                this.Cookie.set('web-menu-index|filter',
                    this.Str.stringify(this.filter));
            }

        },

        methods: {

            navigate({ row })
            {
                let name = this.Obj.get(row, 'connector.connect.edit');

                this.$router.push({ name, params: row });
            },

            setSorting(prop, dir)
            {
                this.$set(this, 'sort', { prop, dir });

                this.fetchEntities();
            },

            setFiltering(filter)
            {
                this.$set(this, 'filter', this.Arr.filter(filter,
                    val => ! this.Any.isEmpty(val.value)));

                this.Any.debounce(() => this.fetchEntities(), 500)();
            },

            doneEntities(res)
            {
                this.request = this.Obj.get(res, 'data', []);
            },

            errorEntities(res)
            {
                this.errors = this.Obj.get(res, 'data.errors', {});
            },

            preloadEntities()
            {
                this.request = this.Data.get('web-menu-index');

                this.load = false;
            },

            fetchEntities()
            {
                this.selected = [];

                let query = this.Obj.only(this.request, [
                    'page', 'limit'
                ]);

                this.Obj.assign(query, this.sort, {
                    filter: this.filter
                });

                let route = this.Route.get('module.web-menu.menu.index',
                    this.$route.params, query);

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(this.doneEntities).catch(this.errorEntities);
            },

            deleteEntities()
            {
                let query = {
                    ids: this.selected
                };

                let route = this.Route.get('module.web-menu.menu.delete',
                    this.$route.params);

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.post(route, query, options)
                    .then(this.fetchEntities).catch(this.errorEntities);
            }

        }

    }
</script>
