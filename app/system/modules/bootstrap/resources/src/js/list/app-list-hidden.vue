<template>
    <div :class="{ 'app-list-hidden': true, 'uk-active': active, 'uk-disabled': href == '' }">

        <!-- Label start -->
        <a :href="href" :class="['fa', icon]"></a>
        <!-- Label end -->

    </div>
</template>
<script>
    module.exports = {

        /**
         * Component name
         */
        name: 'app-list-hidden',

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
        }

    }
    liro.component(module.exports);
</script>
