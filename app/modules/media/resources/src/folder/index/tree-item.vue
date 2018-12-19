<template>

<li ref="folder" :class="{ 'liro-media-tree-item': true, 'is-active': value.path == tree.folder.path }">
    <a href="javascript:void(0)" @click="fetchFolder" draggable="true" @drop="dropFolder" @dragstart="dragFolder" @dragend="dragFolderEnd" @dragover="dragFolderOver" @dragleave="dragFolderLeave">
        <div v-if="value.dirs.length != 0" class="liro-media-tree-collapse uk-flex-none" @click.stop="open = !open">
            <i class="uk-icon-small" :uk-icon="!open ? 'chevron-right' : 'chevron-down'"></i>
        </div>
        <div class="liro-media-tree-icon uk-flex-none">
            <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="18" height="18" uk-svg>
        </div>
        <div class="liro-media-tree-name uk-flex-1 uk-text-truncate">
            <span>{{ value.name }}</span>
        </div>
        <div class="liro-media-tree-count uk-flex-none">
            <span>{{ value.count }}</span>
        </div>
    </a>
    <ul ref="list" class="liro-media-tree-list uk-nav" v-if="value.dirs.length != 0">
        <liro-folder-index-tree-item v-for="(dir, index) in value.dirs" :key="index" :value="dir"></liro-folder-index-tree-item>
    </ul>
</li>

</template>
<script>

export default {

    inject: [
        'tree'
    ],

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    data: function () {
        return {
            open: false
        };
    },

    watch: {

        open: function () {
            $(this.$refs.list).slideToggle(150);
        }

    },

    methods: {

        dropFolder: function (event) {

            var input = event.dataTransfer.getData('file');

            if ( input ) {
                Liro.events.emit('liro-media.file@move', input, this.value.path);
            }

            var input = event.dataTransfer.getData('folder');

            if ( input && input != this.value.path ) {
                Liro.events.emit('liro-media.folder@move', input, this.value.path);
            }

            $(this.$refs.folder).removeClass('is-dragover');
        },

        dragFolder: function () {
            $(this.$refs.folder).addClass('is-ghost');
            event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function () {
            $(this.$refs.folder).removeClass('is-ghost');
        },

        dragFolderOver: function () {
            $(this.$refs.folder).addClass('is-dragover');
        },

        dragFolderLeave: function () {
            $(this.$refs.folder).removeClass('is-dragover');
        },

        fetchFolder: function () {
            Liro.events.emit('liro-media.folder@fetch', this.value.path)
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-tree-item', this.default);
}

</script>
