<template>
    <ul class="uk-list" style="position: relative; overflow:hidden;">
        <app-drag class="app-menu-dropzone"
        v-model="menus" :options="{ draggable: '.app-menu-item', group: 'app-menu-list', animation: 150 }">
            <app-menu-index-item class="app-menu-item" v-for="(menu, index) in menus" :key="menu.id" v-model="menus[index]"></app-menu-index-item>
        </app-drag>
    </ul>
</template>
<script>
    module.exports = {
        name: 'app-menu-index-list',
        props: {
            value: {
                default() {
                    return [];
                },
                type: Array
            }
        },
        data() {
            return {
                menus: this.value
            }
        },
        mounted() {

            this.$watch('menus', (value) => {
                this.$emit('input', value);
            });

            this.$watch('value', (value) => {
                this.list = value
            });

        }
    }
    liro.component(module.exports);
</script>
<style>
.app-menu-dropzone {
    min-height: 0;
    transition: min-height 300ms;
}
.app-menu-dropzone:hover li:not([draggable="true"]) > ul > .app-menu-dropzone {
    min-height: 100px;
    background-color: rgba(0, 0, 255, 0.1);
}
</style>

