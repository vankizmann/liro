<template>

    <app-list ref="list" :model="list" database="liro-users.users.index">
        <div class="table" slot-scope="{ items }">

            <!-- Table head -->
            <div class="table__head">
                <div class="table__tr grid grid--row grid--middle">
                    <div v-if="search.length !== 0" class="table__td table__td--xl col--left">
                        <app-list-search :columns="search" />
                    </div>
                    <div class="table__td col--right">
                        <slot name="action"></slot>
                    </div>
                </div>
            </div>
            <!-- Table head end -->

            <!-- Table filter -->
            <div class="table__filter">
                <div class="table__tr grid grid--row grid--middle">
                    <div v-for="column in filledColumns" :class="['table__td', column.class]">

                        <template v-if="column.type === 'checkbox'">
                            <app-list-select-all />
                        </template>

                        <template v-if="column.type === 'order'">
                            <app-list-sort :column="column.prop" :label="column.label" />
                        </template>

                        <template v-if="column.type === 'filter'">
                            <app-list-filter :column="column.prop" :label="column.label" :filters="castData(column.filter.data)" :filters-label="column.filter.label || 'label'" :filters-value="column.filter.value || 'value'" />
                        </template>

                        <template v-if="column.type === 'index'">
                            <span v-html="column.label"></span>
                        </template>

                    </div>
                </div>
            </div>
            <!-- Table filter end -->

            <!-- Table body -->
            <div class="table__body" v-show="items.length !== 0">
                <div class="table__tr grid grid--row grid--middle" v-for="(item, index) in items" :key="index">
                    <div v-for="column in filledColumns" :class="['table__td', column.class]">

                        <template v-if="column.type === 'checkbox'">
                            <app-list-select :value="item.id" />
                        </template>

                        <template v-if="column.type === 'order'">
                            <slot :name="'column.' + column.prop" :item="item">
                                <span>{{ item[column.prop] }}</span>
                            </slot>
                        </template>

                        <template v-if="column.type === 'index'">
                            <slot :name="'column.' + column.prop" :item="item">
                                <span>{{ item[column.prop] }}</span>
                            </slot>
                        </template>

                        <template v-if="column.type === 'filter'">
                            <div class="grid grid--10 grid--wrap">
                                <div class="col--flex-0" v-for="tag in extractFilters(item[column.prop], column.filter)">
                                    <el-tag size="medium">{{ tag[column.filter.label || 'label'] }}</el-tag>
                                </div>
                            </div>

                        </template>

                    </div>
                </div>
            </div>
            <!-- Table body end -->

            <!-- Table body -->
            <div class="table__body" v-show="items.length === 0">
                <div class="table__tr grid grid--row grid--middle">
                    <div class="table__td col--1-1 text--center text--muted">
                        {{ trans('el.table.emptyText') }}
                    </div>
                </div>
            </div>
            <!-- Table body end -->

            <div class="table__footer">
                <div class="table__tr grid grid--row grid--middle">
                    <div class="table__td col--1-1">
                        <app-list-pagination></app-list-pagination>
                    </div>
                </div>
            </div>

        </div>
    </app-list>

</template>
<script>

    export default {

        props: {

            list: {
                required: true,
                type: Array
            },

            columns: {
                required: true,
                type: Array
            },

            search: {
                default: function () {
                    return []
                },
                type: Array
            },

            selected: {
                default: function () {
                    return [];
                },
                type: Array
            }

        },

        computed: {

            filledColumns: function () {
                return _.map(this.columns, (column) => {
                    return _.extend(true, { label: '', align: 'left', class: 'col--flex-1' }, column);
                });
            }

        },

        data: function () {
            return {
                currentAction: ''
            }
        },

        mounted: function () {
            this.$refs.list.$on('hook:updated', () => {
                this.$emit('update:selected', this.$refs.list.library.config.select.selected);
            });
        },

        methods: {

            castData: function (data) {
                return _.isFunction(data) ? data() : data;
            },

            extractFilters: function (selected, filter) {
                return _.filter(this.castData(filter.data), (item) => {
                    return selected.indexOf(item[filter.value || 'value']) !== -1;
                });
            }

        }

    }

</script>
