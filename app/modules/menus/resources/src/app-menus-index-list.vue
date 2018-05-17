<template>
    <ul class="uk-list" ref="list">
        <app-drag class="app-menu-dropzone" ref="dropzone" :list="menus" :options="{ draggable: '.app-menu-item', group: 'app-menu-list', animation: 300, delay: 10 }">
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
                drag: false,
                menus: this.value
            }
        },
        mounted() {

            this.$watch('menus', (value) => {
                this.$emit('input', value);
            });

            this.$watch('value', (value) => {
                this.menus = value;
            });

            $('body').on('start', (event) => {
                if ( this.$refs.dropzone ) {
                    $(this.$refs.dropzone.$el).addClass('sortable-drag');
                }
            });

            $('body').on('end', (event) => {
                if ( this.$refs.dropzone ) {
                    $(this.$refs.dropzone.$el).removeClass('sortable-drag');
                }
            });

        }
    }
    liro.component(module.exports);
</script>

