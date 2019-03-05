<template>

<div class="app-list-filter">

    <el-checkbox-group v-model="values">
        <template v-for="(filter, index) in filters">
            <el-checkbox :key="index" :value="filter[filtersValue]" :label="filter[filtersLabel]"></el-checkbox>
        </template>
    </el-checkbox-group>

    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': values.length != 0 }">
        <i uk-icon="check-square"></i> <span v-if="$slots.default"><slot></slot></span>
    </a>
    <!-- Label end -->



    <div ref="dropdown" class="uk-text-left" uk-dropdown="mode: click; pos: bottom-justify;">

        <!-- Reset start -->
        <div class="uk-margin-top uk-child-width-1-1">
            <a :class="{ 'uk-button uk-button-primary uk-button-small': true, 'uk-disabled': values.length == 0 }" href="javascript:void(0)" @click="resetFilter">
                <span>{{ trans('form.list.reset') }}</span>
            </a>
        </div>
        <!-- Reset end -->

    </div>
    
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
