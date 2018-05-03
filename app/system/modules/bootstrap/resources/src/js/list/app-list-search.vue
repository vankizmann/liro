<template>
    <div :class="{ 'app-list-search': true, 'uk-active': active == column }">
        <div class="app-list-search-order">
            <slot></slot>
            <span v-if="direction == 'desc'" class="fa fa-sort-down" @click="order('asc')"></span>
            <span v-else class="fa fa-sort-up" @click="order('desc')"></span>
            
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-search',
        computed: {
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
            search: {
                default: '',
                type: String
            }
        },
        methods: {
            order(direction) {
                this.$store.commit('list/set', [this.column, direction]);
                this.$store.commit('list/search');
            }
        }
    }
    liro.component(module.exports);
</script>
