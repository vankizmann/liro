<template>

<div class="app-list-filter">
    
    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': values.length != 0 }">
        <i uk-icon="check-square"></i> <span v-if="$slots.default"><slot></slot></span>
    </a>
    <!-- Label end -->

    <div class="uk-text-left" uk-dropdown="mode: click;">

        <!-- Options start -->
        <label v-for="(filter, index) in filters" :key="index" class="uk-checkbox-label uk-display-block uk-margin-small-bottom">
            <input type="checkbox" class="uk-checkbox" :value="filter[filtersValue]" v-model="values"> <span>{{ filter[filtersLabel] }}</span>
        </label>
        <!-- Options end -->

        <!-- Reset start -->
        <div class="uk-text-small uk-text-right">
            <a href="javascript:void(0)" @click="values = []">
                {{ trans('theme::form.list.reset') }}
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

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-filter', this.default);
}

</script>
