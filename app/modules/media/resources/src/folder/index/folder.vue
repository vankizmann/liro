<template>

<div ref="folder" class="liro-media-item is-folder uk-flex uk-flex-column uk-position-relative" draggable="true" @dblclick="folder.fetchFolder(value.path)" @drop="dropFile" @dragstart="dragFolder" @dragend="dragFolderEnd" @dragover="dragFolderOver" @dragleave="dragFolderLeave">
    <div class="liro-media-options uk-position-top-right">
        <a href="javascript:void(0)">
            <i class="uk-icon-small" uk-icon="chevron-down"></i>
        </a>
        <div ref="dropdown" uk-dropdown="mode: click; pos: bottom-center;">
            <ul class="uk-nav">
                <li>
                    <a href="javascript:void(0)" @click="renameFolderPrompt">
                        <span>{{ trans('theme::form.toolbar.rename') }}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" @click.capture="deleteFolderConfirm">
                        <span>{{ trans('theme::form.toolbar.delete') }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="liro-media-icon uk-margin-auto-top">
        <div class="uk-text-center">
            <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="80" height="80" uk-svg>
        </div>
    </div>
    <div class="liro-media-name uk-margin-auto-top uk-text-center">
        <div class="uk-margin-top uk-text-center uk-text-truncate">
            <div :uk-tooltip="value.name">
                <span>{{ value.name }}</span>
            </div>
        </div>
        <div class="uk-text-center uk-text-muted uk-text-small">
            <span>{{ choice('liro-media::form.folder.count', value.count) }}</span>
        </div>
    </div>
</div>

</template>
<script>

export default {

    inject: [
        'folder'
    ],

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        dragFolder: function () {
            $(this.$refs.folder).addClass('is-ghost');
            event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function () {
            $(this.$refs.folder).removeClass('is-ghost');
        },

        dragFolderOver: function (event) {
            if ( event.target != this.$refs.folder ) {
                $(this.$refs.folder).addClass('is-dragover');
            }
        },

        dragFolderLeave: function (event) {
            if ( event.target != this.$refs.folder ) {
                $(this.$refs.folder).removeClass('is-dragover');
            }
        },

        dropFile: function (event) {

            $(this.$refs.folder).removeClass('is-dragover');

            var file = event.dataTransfer.getData('file');

            if ( ! file ) {
                return;
            }

            var url = this.route('liro-media.ajax.file.move');

            var folder = {
                source: file, destination: this.value.path
            };

            this.http.post(url, folder).then(this.moveFileResponse);
        },

        renameFolderPrompt: function () {

            UIkit.toggle(this.$refs.dropdown);

            var message = this.trans('liro-media::form.folder.name');
            UIkit.modal.prompt(message, this.value.name).then(this.renameFolder);
        },

        renameFolder: function (dest) {

            if ( dest == null || dest == '' ) {
                return;
            }

            var url = this.route('liro-media.ajax.folder.rename');

            var folder = {
                path: this.value.path, dest: dest
            };

            this.http.post(url, folder).then(this.renameFolderResponse);
        },

        renameFolderResponse: function (res) {

            UIkit.toggle(this.$refs.dropdown);

            var message = Liro.messages.get('liro-media::message.folder.renamed');
            UIkit.notification(message, 'success');
        },

        deleteFolderConfirm: function () {

            var message = this.trans('liro-media::message.folder.delete', {
                name: this.value.name
            });

            UIkit.modal.confirm(message).then(this.deleteFolder, () => null);
        },

        deleteFolder: function () {

            var url = this.route('liro-media.ajax.folder.delete');

            var folder = {
                path: this.value.path
            };

            this.http.post(url, folder).then(this.deleteFolderResponse);
        },

        deleteFolderResponse: function (res) {
            var message = Liro.messages.get('liro-media::message.folder.deleted');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-folder', this.default);
}

</script>

