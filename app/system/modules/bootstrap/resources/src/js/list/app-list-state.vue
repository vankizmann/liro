<template>
    <div :class="{ 'app-list-state': true, 'uk-active': active, 'uk-disabled': href == '' }">

        <!-- Marker start -->
        <a :href="href"></a>
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
        }

    }
    liro.component(module.exports);
</script>
