<template>
    <div :class="{ 'app-list-sort': true, 'uk-active': active }">

        <!-- Label start -->
        <a href="#"  @click.prevent="setSort">
            <i :class="['fa', icon]"></i> <span><slot></slot></span>
        </a>
        <!-- Label end -->

    </div>
</template>
<script>
    module.exports = {

        /**
         * Component name
         */
        name: 'app-list-sort',

        /**
         * Computed properties
         */
        computed: {
            direction() {
                return this.$store.getters['list/direction'];
            },
            icon() {

                if ( this.reverse ) {
                    return this.direction == 'asc' ? 'fa-sort-amount-up' : 'fa-sort-amount-down';
                }

                return this.direction == 'asc' ? 'fa-sort-amount-down' : 'fa-sort-amount-up';
            },
            active() {
                return this.$store.getters['list/order'] == this.column;
            }
        },

        /**
         * Changable properties
         */
        props: {
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
                this.$store.commit('list/sort', { column: this.column, direction: this.direction == 'desc' ? 'asc' : 'desc' });
            }
        }

    }
    liro.component(module.exports);
</script>
