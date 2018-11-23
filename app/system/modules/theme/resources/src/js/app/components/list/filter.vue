<template>

<div class="app-list-filter">
    
    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': values.length != 0 }">
        <i :uk-icon="'triangle-down'"></i> <span v-if="$slots.default"><slot></slot></span>
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

    props: {

        column: {
            default() {
                return '';
            },
            type: String
        },

        display: {
            default() {
                return '';
            },
            type: String
        },

        label: {
            default() {
                return '';
            },
            type: String
        },

        filters: {
            default() {
                return [];
            },
            type: [Array, Object]
        },

        filtersValue: {
            default() {
                return 'value';
            },
            type: String
        },

        filtersLabel: {
            default() {
                return 'label';
            },
            type: String
        },

        config: {
            default() {
                return {};
            },
            type: Object
        }

    },

    data() {
        return {
            values: []
        };
    },

    mounted() {

        this.$watch('config', () => {
            this.values = this.config[this.column] || []
        });

        this.$watch('values', () => {
            this.$emit('filter', this.column, this.values);
        });

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-filter', this.default);
}

</script>
