<template>
    <div class="app-media-tree-folder">

        <div class="app-media-tree-item uk-flex uk-flex-middle" @click="goto" @drop="drop" @dragover.prevent>

            <div class="app-media-tree-icon">
                <span uk-icon="folder"></span>
            </div>

            <div class="app-media-tree-name">
                {{ directory.name || $t('liro-media.form.root') }}
            </div>

            <div class="app-media-tree-count">
                {{ count }}
            </div>

        </div>

        

        <app-media-tree 
            v-for="(item, index) in directory.directories" :key="index" :directory="item"
        ></app-media-tree>

    </div>
</template>
<script>
export default {
    props: {
        directory: {
            default() {
                return {};
            },
            type: Object
        }
    },
    computed: {
        count() {
            return this.directory.directories.length + this.directory.files.length;
        }
    },
    methods: {
        goto(event) {
            this.$liro.event.$emit('media:goto', event, this.directory);
        },
        drop(event) {
            this.$liro.event.emit('media:move', event, this.directory);
        }
    }
}

if (window.liro) {
    liro.vue.$component('app-media-tree', this.default);
} 
</script>
