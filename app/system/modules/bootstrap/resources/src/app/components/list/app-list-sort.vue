<template>
    <div :class="{ 'app-list-sort': true, 'uk-active': column == config.column }">

        <!-- Label start -->
        <a href="#"  @click.prevent="setSort">
            <i :class="['fa', icon]"></i> <span><slot></slot></span>
        </a>
        <!-- Label end -->

    </div>
</template>
<script>
    export default {

        /**
         * Computed properties
         */
        computed: {
            icon() {

                if ( this.reverse ) {
                    return this.config.direction == 'asc' ? 'fa-sort-amount-up' : 'fa-sort-amount-down';
                }

                return this.config.direction == 'asc' ? 'fa-sort-amount-down' : 'fa-sort-amount-up';
            }
        },

        /**
         * Changable properties
         */
        props: {

            config: {
                default() {
                    return {
                        column: 'id', direction: 'desc'
                    };
                },
                type: Object
            },

            column: {
                default: '',
                type: String
            },

            label: {
                default: '',
                type: String
            },

            reverse: {
                default: false,
                type: Boolean
            }

        },

        /**
         * Component methods
         */
        methods: {
            setSort() {
                console.log(this.config.direction);
                this.$emit('order', this.column, this.config.direction == 'desc' ? 'asc' : 'desc');
            }
        }

    }
    liro.vue.$component('app-list-order', this.default);
</script>
