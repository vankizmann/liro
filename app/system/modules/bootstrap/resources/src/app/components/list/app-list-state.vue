<template>
    <div :class="{ 'app-list-state': true, 'uk-active': active, 'uk-disabled': href == '' }">

        <!-- Marker start -->
        <a :href="href" @click="click"></a>
        <!-- Marker end -->

    </div>
</template>
<script>
    export default {

        /**
         * Computed properties
         */
        props: {
            href: {
                default: '#',
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
    liro.vue.$component('app-list-state', this.default);
</script>
