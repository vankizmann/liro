<template>
    <div :class="{ 'app-list-sort': true, 'uk-active': active }">
        <a href="#"  @click.prevent="reverse">
            <i :class="['fa', icon]"></i> <span><slot></slot></span>
        </a>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-filter-direction',
        computed: {
            direction() {
                return this.$store.getters['list/direction'];
            },
            icon() {

                if ( this.numeric && this.direction == 'asc' ) {
                    return 'fa-sort-amount-up';
                }

                if ( this.numeric && this.direction == 'desc' ) {
                    return 'fa-sort-amount-down';
                }

                if ( this.direction == 'asc' ) {
                    return 'fa-sort-amount-down';
                }

                if ( this.direction == 'desc' ) {
                    return 'fa-sort-amount-up';
                }

                return '';
            },
            active() {
                return this.$store.getters['list/order'] == this.column;
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
            numeric: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            reverse() {
                this.$store.commit('list/order', [this.column, this.direction == 'desc' ? 'asc' : 'desc']);
            }
        }
    }
    liro.component(module.exports);
</script>
