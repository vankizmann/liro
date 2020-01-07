<template>
    <NLoader :visible="load" class="web-language-index full-height full-height--fixed auto-height-child">
        <div class="grid grid--col">

            <div class="web-body-item col--flex-none">
                <WebBackendTitle :info="trans('An overview of all language items registered in your webpage')">

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
                            <NPopover ref="popover" type="select" trigger="click" position="bottom-end" :width="220" :disabled="! selected.length">

                                <NButton class="n-popover-option" type="primary" :link="true" :icon="icons.activate">
                                    {{ trans('Activate') }}
                                </NButton>
                                <NConfirm type="primary" @confirm="modifyEntities('activate')">
                                    {{ choice('Do you want to activate :count items?', selected.length) }}
                                </NConfirm>

                                <NButton class="n-popover-option" type="warning" :link="true" :icon="icons.deactivate">
                                    {{ trans('Deactivate') }}
                                </NButton>
                                <NConfirm type="warning" @confirm="modifyEntities('deactivate')">
                                    {{ choice('Do you want to deactivate :count items?', selected.length) }}
                                </NConfirm>

                                <NButton class="n-popover-option" type="info" :link="true" :icon="icons.archive">
                                    {{ trans('Archive') }}
                                </NButton>
                                <NConfirm type="info" @confirm="modifyEntities('archive')">
                                    {{ choice('Do you want to archive :count items?', selected.length) }}
                                </NConfirm>

                                <NButton class="n-popover-option" type="danger" :link="true" :icon="icons.delete">
                                    {{ trans('Delete') }}
                                </NButton>
                                <NConfirm type="danger" @confirm="modifyEntities('delete')">
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

                    <NTableColumn prop="state" type="option" options-label="$value.label" options-value="$value.value" :options="states" :sort="true" :filter="true" :label="trans('State')" :default-width="75">
                        <!-- State -->
                    </NTableColumn>

                    <NTableColumn prop="hide" type="option" options-label="$value.label" options-value="$value.value" :options="hides" :sort="true" :filter="true" :label="trans('Visibility')" :default-width="75">
                        <!-- Hide -->
                    </NTableColumn>

                    <NTableColumn prop="title" :sort="true" :filter="true" :label="trans('Title')" :default-width="200">
                        <!-- Title -->
                    </NTableColumn>

                    <NTableColumn prop="locale" :sort="true" :filter="true" :label="trans('Locale')" :default-width="75">
                        <!-- Slug -->
                    </NTableColumn>

                    <NTableColumn prop="updated_at" type="datetime" :sort="true" :filter="true" :label="trans('Updated')" :default-width="100">
                        <!-- Updated at -->
                    </NTableColumn>

                    <NTableColumn prop="created_at" type="datetime" :sort="true" :filter="true" :label="trans('Created')" :default-width="100">
                        <!-- Created -->
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

        name: 'WebLanguageIndex',

        data()
        {
            let request = {
                data: [], page: 1, limit: 50, total: 0
            };

            let filter = [
                // Default filters
            ];

            if ( this.Cookie.get('web-language-index|filter') ) {
                filter = this.Str.objectify(
                    this.Cookie.get('web-language-index|filter')
                );
            }

            let sort = {
                prop: 'updated_at', dir: 'desc'
            };

            if ( this.Cookie.get('web-language-index|sort') ) {
                sort = this.Str.objectify(
                    this.Cookie.get('web-language-index|sort')
                );
            }

            let states = [
                { value: '1', label: this.trans('Active') },
                { value: '0', label: this.trans('Inactive') },
                { value: '2', label: this.trans('Archived') },
            ];

            let hides = [
                { value: '0', label: this.trans('Visible') },
                { value: '1', label: this.trans('Invisible') },
            ];

            return { request, sort, filter, states, hides, selected: [], load: true };
        },

        mounted()
        {
            this.$refs.table.$on('filter',
                this.Any.debounce(this.setFiltering, 500));

            if ( this.Data.has('web-language-index') ) {
                return this.Any.delay(this.preloadEntities, 250);
            }

            this.fetchEntities();
        },

        watch: {

            request()
            {
                this.Data.set('web-language-index', this.request);
            },

            sort()
            {
                this.Cookie.set('web-language-index|sort',
                    this.Str.stringify(this.sort));
            },

            filter()
            {
                this.Cookie.set('web-language-index|filter',
                    this.Str.stringify(this.filter));
            }

        },

        methods: {

            navigate({ row })
            {
                let name = this.findRoute('WebLanguageEdit');

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
                this.request = this.Data.get('web-language-index');

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

                let route = this.Route.get('module.web-language.language.index',
                    this.$route.params, query);

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(this.doneEntities).catch(this.errorEntities);
            },

            modifyEntities(type)
            {
                this.$refs.popover.close();

                let query = {
                    ids: this.selected
                };

                let route = this.Route.get(`module.web-language.language.${type}`,
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
