<template>
    <div :class="{ 'app-list-filter': true, 'uk-active': values.length != 0 }">
        
        <!-- Label start -->
        <a href="#">
            <i class="fa fa-check-square"></i> <span><slot></slot></span>
        </a>
        <!-- Label end -->

        <div uk-dropdown="mode: click;">

            <!-- Options start -->
            <label v-for="(filter, index) in filters" :key="index" class="uk-display-block" style="margin-bottom: 3px;">
                <input type="checkbox" class="uk-checkbox" style="margin-right: 4px;" :value="filter[filtersValue]" v-model="values"> <span>{{ filter[filtersLabel] }}</span>
            </label>
            <!-- Options end -->

            <!-- Reset start -->
            <div class="uk-text-small uk-text-right">
                <a href="#" @click.prevent="values = []">{{ reset }}</a>
            </div>
            <!-- Reset end -->

        </div>
        
    </div>
</template>
<script>
    export default {

        /**
         * Changable properties
         */
        props: {
            column: {
                default: '',
                type: String
            },
            display: {
                default: '',
                type: String
            },
            label: {
                default: '',
                type: String
            },
            reset: {
                default: '',
                type: String
            },
            filters: {
                default: () => [],
                type: Array
            },
            filtersValue: {
                default: 'value',
                type: String
            },
            filtersLabel: {
                default: 'label',
                type: String
            },
        },

        /**
         * Data function
         */
        data() {
            return {
                values: this.$store.getters['list/filter'][this.column] || []
            };
        },

        /**
         * Component watchers
         */
        watch: {
            values() {
                this.$store.commit('list/filter', { column: this.column, values: this.values });
            }
        }

    }
    liro.vue.$component('app-list-filter', this.default);
</script>
