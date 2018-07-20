<template>
    <app-drag element="ul" class="uk-list" ref="dropzone" :list="menus" :options="{ group: 'menu', filter: '.app-menu-ignore' }">
        <app-menu-index-item v-for="(menu, index) in menus" :key="menu.id" v-model="menus[index]"></app-menu-index-item>
    </app-drag>
</template>
<script>
    module.exports = {

        props: {
            value: {
                default() {
                    return [];
                },
                type: [Array, Object]
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
            }, { deep: true });

            this.$watch('value', (value) => {
                this.menus = value;
            });

            var interval = null;

            $('body').on('start', (event) => {

                if ( this.$refs.dropzone && ! $(this.$refs.dropzone.$el).parent().hasClass('sortable-chosen') )  {
                    interval = setInterval(() => {

                        if( this.$refs.dropzone && $(this.$refs.dropzone.$el).children('li').length != 0 ) {
                            $('> .app-menu-ignore', this.$refs.dropzone.$el).remove();
                        }
                        
                        if( this.$refs.dropzone && $(this.$refs.dropzone.$el).children('li').length == 0 ) {
                            $(this.$refs.dropzone.$el).append('<li class="app-menu-ignore"></li>');
                        }

                    }, 50);
                }
            });

            $('body').on('end', (event) => {

                if ( interval ) {
                    clearInterval(interval);
                }

                if( this.$refs.dropzone && $(this.$refs.dropzone.$el).children('li').length != 0 ) {
                    $('> .app-menu-ignore', this.$refs.dropzone.$el).remove();
                }

            });

        }

    }
    liro.vue.$component('app-menu-index-list', module.exports);
</script>

