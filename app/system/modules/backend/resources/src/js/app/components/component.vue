<template>
    <component class="component" v-if="component !== null" :is="component" />
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
            this.liro.modules.import(this.element, (data) => {
                this.component = data;
            });
        }

    }
</script>
