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
            <a href="#" @click.prevent="values = []">
                {{ Liro.messages.get('theme::form.list.reset') }}
            </a>
        </div>
        <!-- Reset end -->

    </div>
    
</div>

</template>
<script>

export default {

    inject: [
        'config', 'methods'
    ],

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
            type: String
        },

        filtersLabel: {
            default: function () {
                return 'label';
            },
            type: String
        }

    },

    data() {
        return {
            values: this.config.filter.filters[this.column] || []
        };
    },

    mounted() {

        this.$watch('values', function () {
            this.methods.filter(this.column, this.values);
        });

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-filter', this.default);
}

</script>
