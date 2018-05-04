<template>
    <div :class="{ 'app-list-direction': true, 'uk-active': $store.getters['list/direction_column'] == column }">
        <div class="app-list-direction-order">
            <slot></slot>
            <span v-if="direction == 'desc'" class="fa fa-sort-down" @click="direction = 'asc'"></span>
            <span v-else class="fa fa-sort-up" @click="direction = 'desc'"></span>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-direction',
        computed: {
            direction: {
                get() {
                    return this.$store.getters['list/direction'];
                },
                set(value) {
                    this.$store.commit('list/direction', value);
                    this.$store.dispatch('list/filter');
                }
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
            }
        },
        mounted() {
            this.$store.commit('list/direction_column', this.column);
        }
    }
    liro.component(module.exports);
</script>
