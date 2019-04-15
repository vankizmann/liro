<template>
    <div>
        <p v-html="test"></p>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({

        data() {
            return { test: 'jajajaja!' }
        },

    });

    Vue.component('liro-test', this.default)
</script>
