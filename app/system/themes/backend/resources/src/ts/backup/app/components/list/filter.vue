<template>

<div class="list-filter">

    <el-popover popper-class="list-filter__popover" width="200" trigger="click">

        <!-- Label start -->
        <a slot="reference" href="javascript:void(0)" :class="{ 'filter__title--active': values.length != 0 }">
            <i class="el-icon-arrow-down"></i> <span><slot>{{ label }}</slot></span>
        </a>
        <!-- Label end -->

        <el-checkbox-group v-model="values">
            <template v-for="(filter, index) in filters">
                <el-checkbox :key="index" :label="filter[filtersValue]">
                    <template name="label">{{ filter[filtersLabel] }}</template>
                </el-checkbox>
            </template>
        </el-checkbox-group>

        <div :class="{ 'list-filter__reset': true, 'list-filter__reset--disabled': values.length === 0 }">
            <a href="javascript:void(0)" @click="resetFilter">
                <span>{{ trans('el.table.resetFilter') }}</span>
            </a>
        </div>


    </el-popover>

</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.filter;
        }

    },

    props: {

        column: {
            default: function () {
                return '';
            },
            type: String
        },

        label: {
            default: function () {
                return '';
            },
            type: String
        },

        filters: {
            default: function () {
                return [];
            },
            type: [Array, Object]
        },

        filtersValue: {
            default: function () {
                return 'value';
            },
            type: [String, Number]
        },

        filtersLabel: {
            default: function () {
                return 'label';
            },
            type: [String, Number]
        }

    },

    data: function () {

        var config = this.list.library.config.filter;

        return {
            values: config.filters[this.column] || []
        };
    },

    watch: {

        values: function () {
            this.list.library.setFilterData(this.column, this.values);
        }

    },

    methods: {

        resetFilter: function () {
            this.values = [];
        }

    }

}

</script>
