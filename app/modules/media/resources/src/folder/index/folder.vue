<template>

<div ref="folder" :class="{ 'liro-media-item is-folder uk-flex uk-flex-column uk-position-relative': true, 'is-selected': media.items.indexOf(value.path) !=
-1 }" :draggable="media.items.indexOf(value.path) != -1" @click="media.selectItem(value.path)" @dblclick="fetchFolder" @drop="dropFolder"
     @dragstart="dragFolder" @dragend="dragFolderEnd" @dragover="dragFolderOver" @dragleave="dragFolderLeave">
    <div class="liro-media-icon uk-margin-auto-top">
        <div class="uk-text-center">
            <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="80" height="80" uk-svg>
        </div>
    </div>
    <div class="liro-media-name uk-margin-auto-top">
        <div class="uk-text-center">
            <div class="uk-text-truncate uk-overflow-hidden" :uk-tooltip="value.name">
                <span>{{ value.name }}</span>
            </div>
        </div>
        <div class="uk-text-center uk-text-muted uk-text-small">
            <div class="uk-text-truncate uk-overflow-hidden">
                <span>{{ choice('liro-media::form.folder.count', value.count) }}</span>
            </div>
        </div>
    </div>
</div>

</template>
<script>

export default {

    inject: [
        'media'
    ],

    props: {

        value: {
            required: true,
            type: Object
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
            Liro.events.emit('liro-media.folder@drag.start', this.value.path);
            // $(this.$refs.folder).addClass('is-ghost');
            // event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function () {
            Liro.events.emit('liro-media.folder@drag.end', this.value.path);
            // $(this.$refs.folder).removeClass('is-ghost');
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
        },

        renameFolderPrompt: function () {

            var message = this.trans('liro-media::form.folder.name');

            var response = (input) => {
                Liro.events.emit('liro-media.folder@rename', this.value.path, input);
            }

            UIkit.modal.prompt(message, this.value.name).then(response);
        },

        deleteFolderConfirm: function () {

            var message = this.trans('liro-media::message.folder.delete', {
                name: this.value.name
            });

            var response = () => {
                Liro.events.emit('liro-media.folder@delete', this.value.path);
            }

            UIkit.modal.confirm(message).then(response, () => null);
        },

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-folder', this.default);
}

</script>

