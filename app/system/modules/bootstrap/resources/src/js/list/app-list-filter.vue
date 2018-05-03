<template>
    <div :class="{ 'app-list-filter': true, 'uk-active': active == column }">
        <div class="app-list-filter-order">
            <slot></slot>
            <span v-if="direction == 'desc'" class="fa fa-sort-down" @click="order('asc')"></span>
            <span v-else class="fa fa-sort-up" @click="order('desc')"></span>
            
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-filter',
        computed: {
            active() {
                return this.$store.getters['list/column'];
            },
            direction() {
                return this.$store.getters['list/direction'];
            }
        },
        props: {
            column: {
                default: '',
                type: String
            },
            label: {
                default: '',
                type: String
            },
            type: {
                default() {
                    return [];
                },
                type: Array
            }
        },
        methods: {
            order(direction) {
                this.$store.commit('list/set', [this.column, direction]);
                this.$store.commit('list/order');
            }
        }
    }
    liro.component(module.exports);
</script>
