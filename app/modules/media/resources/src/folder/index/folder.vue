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

            var input = event.dataTransfer.getData('file');

            if ( input ) {
                var url = this.route('liro-media.ajax.file.move');

                var folder = {
                    source: input, destination: this.value.path
                };

                this.http.post(url, folder).then(this.moveFileResponse);
            }

            var input = event.dataTransfer.getData('folder');

            if ( input && input != this.value.path ) {
                var url = this.route('liro-media.ajax.folder.move');

                var folder = {
                    source: input, destination: this.value.path
                };

                this.http.post(url, folder).then(this.moveFolderResponse);
            }

            $(this.$refs.folder).removeClass('is-dragover');
        },

        moveFileResponse: function (res) {

            UIkit.notification(
                this.trans('liro-media::message.file.moved'), 'success'
            );

            this.$emit('change');
        },

        moveFolderResponse: function (res) {

            UIkit.notification(
                this.trans('liro-media::message.folder.moved'), 'success'
            );

            this.$emit('change');
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
                source: this.value.path, destination: dest
            };

            this.http.post(url, folder).then(this.renameFolderResponse);
        },

        renameFolderResponse: function (res) {

            UIkit.toggle(this.$refs.dropdown);

            UIkit.notification(
                this.trans('liro-media::message.folder.renamed'), 'success'
            );

            this.$emit('change');
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
                source: this.value.path
            };

            this.http.post(url, folder).then(this.deleteFolderResponse);
        },

        deleteFolderResponse: function (res) {

            UIkit.notification(
                this.trans('liro-media::message.folder.deleted'), 'success'
            );

            this.$emit('change');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-folder', this.default);
}

</script>

