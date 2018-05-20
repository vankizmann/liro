<template>
    <div :class="{ 'app-list-state': true, 'uk-active': active, 'uk-disabled': href == '' }">

        <!-- Marker start -->
        <a :href="href" @click="click"></a>
        <!-- Marker end -->

    </div>
</template>
<script>
    module.exports = {

        /**
         * Component name
         */
        name: 'app-list-state',

        /**
         * Computed properties
         */
        props: {
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
    liro.component(module.exports);
</script>
