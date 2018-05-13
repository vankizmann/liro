<template>
    <ul class="uk-list">
        <app-menu-index-item v-for="(menu, index) in value" :key="index" v-model="value[index]"></app-menu-index-item>
    </ul>
</template>
<script>
    module.exports = {
        name: 'app-menu-index-list',
        props: {
            value: {
                type: Array
            }
        }
    }
    liro.component(module.exports);
</script>

