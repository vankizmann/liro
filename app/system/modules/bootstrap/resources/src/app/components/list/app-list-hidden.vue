<template>
    <div :class="{ 'app-list-hidden': true, 'uk-active': active, 'uk-disabled': href == '' }">

        <!-- Label start -->
        <a :href="href" :class="['fa', icon]" @click="click"></a>
        <!-- Label end -->

    </div>
</template>
<script>
    export default {

        /**
         * Changable properties
         */
        props: {
            icon: {
                default: 'fa-eye-slash',
                type: String
            },
            href: {
                default: '',
                type: String
            },
            active: {
                default: false,
                type: Boolean
            }
        },

        methods: {
            click(event) {
                this.$emit('click', event);
            }
        }

    }
    liro.vue.$component('app-list-hidden', this.default);
</script>
