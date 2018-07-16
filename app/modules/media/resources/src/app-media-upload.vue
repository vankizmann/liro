<template>
    <div class="app-media-upload">
        <div class="app-media-upload-dropzone uk-padding uk-flex uk-flex-wrap" ref="dropzone" @drop.prevent="fileDrop" @dragover.prevent>

            <div class="app-media-upload-files uk-width-1-1 uk-flex uk-flex-wrap uk-flex-center">

                <div v-if="files.length == 0" class="app-media-upload-empty uk-text-center">
                    <span>{{ $t('liro-media.upload.empty') }}</span>
                </div>

                <div v-else v-for="(file, index) in files" :key="index" class="app-media-upload-file uk-flex uk-flex-column uk-padding-small">
                    
                    <div class="app-media-upload-file-image uk-flex uk-flex-middle uk-flex-center">
                        <img v-if="['image/jpeg', 'image/png'].indexOf(file.type) != -1" :src="filePreview(file)" :alt="file.name">
                        <span v-else uk-icon="question"></span>
                    </div>
                    
                    
                    <div class="app-media-upload-file-name uk-text-center uk-text-truncate uk-margin-top">
                        <span>{{ file.name }}</span>
                    </div>

                    <div class="app-media-upload-file-remove uk-text-center uk-text-truncate uk-margin-small-bottom">
                        <a @click="fileRemove(index)">{{ $t('liro-media.upload.remove') }}</a>
                    </div>

                </div>

            </div>

            <div class="app-media-upload-button uk-width-1-1 uk-margin-top uk-text-center">
                <button class="uk-button uk-button-primary" @click="$refs.input.click()">{{ $t('liro-media.upload.select') }}</button>
                <button class="uk-button uk-button-success" @click="fileUpload">{{ $t('liro-media.upload.start') }}</button>
            </div>
            
        </div>

        <input style="display: none;" type="file" ref="input" multiple @change="fileSelect">
    </div>
</template>
<script>
export default {
    data() {
        return {
            files: []
        };
    },
    mounted() {
        this.$liro.event.watch("media:update", () => (this.files = []));
    },
    methods: {
        fileDrop(event) {
            _.each(event.dataTransfer.files, file => this.files.push(file));
        },
        fileSelect() {
            _.each(this.$refs.input.files, file => this.files.push(file));
        },
        filePreview(file) {
            return URL.createObjectURL(file);
        },
        fileRemove(index) {
            this.files.splice(index, 1);
        },
        fileUpload() {
            this.$liro.event.emit("media:upload", this.files);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-upload", this.default);
}
</script>
