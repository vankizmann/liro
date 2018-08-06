<template>
    <div :class="{ 'app-list-collapse': true, 'uk-disabled': disabled, 'uk-active': active }">

        <!-- Label start -->
        <a v-if="active" href="#" @click.prevent="click" uk-icon="chevron-down"></a>
        <a v-else href="#" @click.prevent="click" uk-icon="chevron-right"></a>
        <!-- Label end -->

    </div>
</template>
<script>
    export default {

        /**
         * Changable properties
         */
        props: {
            open: {
                default: 'fa-angle-down',
                type: String
            },
            closed: {
                default: 'fa-angle-right',
                type: String
            },
            disabled: {
                default: true,
                type: Boolean
            },
            active: {
                default: false,
                type: Boolean
            }
        },

        /**
         * Component methods
         */
        methods: {
            click(event) {
                this.$emit('click', event);
            }
        }

    }

    liro.vue.$component('app-list-collapse', this.default);
</script>
