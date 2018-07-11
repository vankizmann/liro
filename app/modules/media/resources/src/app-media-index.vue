<template>
    <div class="app-media uk-flex uk-flex-wrap">
        <app-media-directory 
            v-for="directory in active.directories" :key="directory.path" 
            :directory="directory" :data-path="directory.path" 
            ondrop="liro.event.emit('media:move', event)" ondragover="event.preventDefault()"
        ></app-media-directory>
        <app-media-file 
            v-for="file in active.files" :key="file.path" 
            :file="file" :data-path="file.path" draggable="true" ondragstart="liro.event.emit('media:drag', event)"
        ></app-media-file>
    </div>
</template>
<script>
import MediaDirectory from './app-media-directory.vue';
import MediaFile from './app-media-file.vue';

export default {

    props: {

        moveRoute: {
            default() {
                return '';
            },
            type: String
        },

        uploadRoute: {
            default() {
                return '';
            },
            type: String
        },

        directories: {
            default() {
                return this.$liro.data.get('directories', []);
            },
            type: [Array, Object]
        }

    },

    computed: {

        active() {
            return this.$liro.func.findRecursive(this.directories, 'path', this.path, 'directories')
        }

    },

    data() {

        return {
            path: ''
        };

    },

    mounted() {

        this.$liro.event.watch('media:goto', (name, path) => {
            this.path = path;
        });

        this.$liro.event.watch('media:drag', (name, event) => {
            event.dataTransfer.setData('path', $(event.target).data('path'));
        });

        this.$liro.event.watch('media:move', (name, event) => {

            this.$http.post(this.moveRoute, {
                source: event.dataTransfer.getData('path'), target: $(event.target).data('path') || $(event.target).parents('[data-path]').data('path')
            }).then(() => {
                console.log('wusa');
            });

        });

    }

}

if (window.liro) {
    liro.vue.$component('app-media-index', this.default);
} 

</script>
