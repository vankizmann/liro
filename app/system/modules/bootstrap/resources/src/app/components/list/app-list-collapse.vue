<template>
    <div :class="{ 'app-list-collapse': true, 'uk-disabled': disabled, 'uk-active': active }">

        <!-- Label start -->
        <a v-if="active" href="#" :class="['fa', open]" @click.prevent="click"></a>
        <a v-else href="#" :class="['fa', closed]" @click.prevent="click"></a>
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
