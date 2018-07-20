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
                <a href="#" @click.prevent="values = []">Reset</a>
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

    if (window.liro) {
        liro.vue.$component('app-list-filter', this.default);
    }
</script>
