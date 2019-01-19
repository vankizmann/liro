<template>

<li ref="folder" :class="{ 'liro-media-tree-item': true, 'is-active': value.path == tree.folder.path }">
    <a href="javascript:void(0)" @click="fetchFolder" draggable="true" @drop="dropFolder" @dragstart="dragFolder" @dragend="dragFolderEnd" @dragover="dragFolderOver" @dragleave="dragFolderLeave">
        <div v-if="!root" :class="{ 'liro-media-tree-collapse uk-flex-none': true, 'is-disabled': value.dirs.length == 0 }" @click.stop="open =
        value.dirs.length == 0 ? false : !open">
            <i class="uk-icon-small" :uk-icon="!open ? 'chevron-right' : 'chevron-down'"></i>
        </div>
        <div class="liro-media-tree-icon uk-flex-none">
            <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="16" height="16" uk-svg>
        </div>
        <div class="liro-media-tree-name uk-flex-1 uk-text-truncate">
            <span>{{ value.name || trans('liro-media::form.folder.root') }}</span>
        </div>
        <div class="liro-media-tree-count uk-flex-none">
            <span>{{ value.count }}</span>
        </div>
    </a>
    <ul ref="list" v-if="value.dirs.length != 0" class="liro-media-tree-list uk-nav" :style="root ? 'display: block;' : 'display:  none;'">
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
        },

        root: {
            default: false,
            type: Boolean
        }

    },

    data: function () {
        return {
            open: this.root
        };
    },

    watch: {

        open: function () {
            $(this.$refs.list).slideToggle(150);
        }

    },

    methods: {

        dropFolder: function (event) {

            if ( this.media.items.indexOf(this.value.path) != -1 ) {
                return;
            }

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
            this.media.addItem(this.value.path);
            Liro.events.emit('liro-media.folder@drag.start', input, this.value.path);
            $(this.$refs.folder).addClass('is-ghost');
            event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function () {
            Liro.events.emit('liro-media.folder@drag.end', input, this.value.path);
            $(this.$refs.folder).removeClass('is-ghost');
        },

        dragFolderOver: function () {
            if ( this.media.items.indexOf(this.value.path) == -1 ) {
                $(this.$refs.folder).addClass('is-dragover');
            }
        },

        dragFolderLeave: function () {
            if ( this.media.items.indexOf(this.value.path) == -1 ) {
                $(this.$refs.folder).removeClass('is-dragover');
            }
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
