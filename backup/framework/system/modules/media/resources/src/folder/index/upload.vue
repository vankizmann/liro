<template>

<div class="liro-folder-index-upload" v-show="files.length">
    <div class="liro-media-upload-title uk-flex uk-flex-middle">
        <div class="uk-flex-1">
            <span>{{ trans('liro-media::form.file.upload') }}</span>
        </div>
        <div class="uk-flex-none uk-margin-left">
            <a class="uk-button uk-button-small uk-button-danger" href="javascript:void(0)" @click="clearFiles">{{ trans('liro-media::form.toolbar.clear') }}</a>
        </div>
    </div>
    <div class="liro-media-upload-item uk-flex uk-flex-middle" v-for="(file, index) in files" :key="index">
        <div class="liro-media-name uk-flex-auto">
            <span>{{ file.name }}</span>
        </div>
        <div class="liro-media-progress uk-width-small uk-width-1-2@m uk-margin-left">
            <progress class="uk-progress uk-margin-remove" max="100" :value="file.progress"></progress>
        </div>
        <div class="liro-media-options uk-flex-none uk-margin-left">
            <a href="javascript:void(0)" @click="clearFile(index)">
                <i uk-icon="times"></i>
            </a>
        </div>
    </div>
</div>

</template>
<script>

export default {

    inject: [
        'media'
    ],

    data: function () {
        return {
            files: []
        }
    },

    methods: {

        clearFiles: function () {
            this.files = [];
        },

        clearFile: function (index) {
            this.files.splice(index, 1);
        },

        onDragover: function (event) {
            event.preventDefault();
        },

        onDrop: function (event) {

            event.preventDefault();

            var files = _.filter(event.originalEvent.dataTransfer.files, (file) => {
                return file.type != '';
            });
            
            _.each(files, this.uploadFile);
        },

        calcProgress: function (index) {
            return _.debounce((event) => {
                this.files[index].progress = Math.floor((event.loaded * 100) / event.total);
            }, 100);
        },

        uploadFile: function (file) {

            var index = this.files.length;

            this.files.push({
                name: file.name, size: file.size, progress: 0
            });

            var form = new FormData;

            form.set('path', this.media.folder.path);
            form.append('file', file);

            var url = this.route('liro-media.ajax.file.upload');

            var config = {
                 spinner: false, onUploadProgress: this.calcProgress(index)
            };

            this.http.post(url, form, config).then(this.uploadFileResponse);
        },

        uploadFileResponse: function () {
            var message = Liro.messages.get('liro-media::message.file.uploaded');
            UIkit.notification(message, 'success');
        }

    },

    created: function () {
        $(document.body).on('dragover', this.onDragover);
        $(document.body).on('drop', this.onDrop);
    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-upload', this.default);
}

</script>
