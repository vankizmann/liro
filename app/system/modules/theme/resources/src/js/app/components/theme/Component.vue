<template>
    <component v-if="component !== null" :is="component"></component>
</template>
<script>
    export default {
        props: {
            element: {
                required: true,
                type: String
            }
        },
        data: function () {
            return {
                component: null
            }
        },
        mounted: function () {
            window.Liro.Modules.import(this.element, (data) => {
                this.component = data;
            });
        }
    }
</script>
