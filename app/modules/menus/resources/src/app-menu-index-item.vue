<template>
    <ul class="uk-list">
        <li v-for="(parent, index) in value" :key="index" :id="'menuItem_'+parent.id">
            <div class="uk-flex uk-flex-wrap">
                <div class="uk-width-1-1">
                    {{ parent.title }}
                </div>
            </div>
            <app-menu-index-item v-model="parent.childs"></app-menu-index-item>
        </li>
    </ul>
</template>
<script>
    module.exports = {
        name: 'app-menu-index-item',
        props: {
            value: {
                type: Array
            }
        }
    }
    liro.component(module.exports);
</script>
