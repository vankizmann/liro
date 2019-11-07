<template>
    <div>
        <p>FOOOOOOO BBBBAAAAARRR</p>
        <p v-html="test"></p>
    </div>
</template>
<script lang="ts">
    export default {
        mounted() {
            console.log('foobar');
        },
        data() {
            return { test: 'jajajaja!' }
        },
    }
</script>
