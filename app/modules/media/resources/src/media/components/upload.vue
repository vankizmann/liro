<template>
<div class="app-media-upload uk-modal-container" ref="dropzone" @drop.prevent="fileDrop" @dragover.prevent uk-modal>

    <!-- Close -->
    <button class="uk-modal-close-default uk-close-large" type="button" uk-close>
        <!-- Cross -->
    </button>
    <!-- Close end -->

    <!-- Dialog -->
    <div class="app-media-upload uk-modal-dialog uk-margin-auto-vertical">

        <!-- Body -->
        <div class="uk-modal-body">
            
            <div class="app-media-upload-dropzone uk-padding">
                <div class="app-media-upload-files uk-flex uk-flex-wrap uk-flex-center">

                    <!-- Empty -->
                    <div v-if="files.length == 0" class="app-media-upload-empty uk-text-center">
                        <span>{{ $t('liro-media.upload.empty') }}</span>
                    </div>
                    <!-- Empty end -->

                    <!-- Filelist -->
                    <div v-else v-for="(file, index) in files" :key="index" class="app-media-upload-file uk-flex uk-flex-column uk-padding-small">
                        
                        <!-- Fileimage -->
                        <div class="app-media-upload-file-image uk-flex uk-flex-middle uk-flex-center">
                            <img v-if="['image/jpeg', 'image/png'].indexOf(file.type) != -1" :src="filePreview(file)" :alt="file.name">
                            <span v-else uk-icon="question"></span>
                        </div>
                        <!-- Fileimage end -->

                        <!-- Filename -->
                        <div class="app-media-upload-file-name uk-text-center uk-text-truncate uk-margin-top">
                            <span>{{ file.name }}</span>
                        </div>
                        <!-- Filename end -->

                        <!-- Remove -->
                        <div class="app-media-upload-file-remove uk-text-center uk-text-truncate uk-margin-small-bottom">
                            <a @click="fileRemove(index)">{{ $t('liro-media.upload.remove') }}</a>
                        </div>
                        <!-- Remove end -->

                    </div>
                    <!-- Filelist end -->

                    <!-- Select -->
                    <div class="app-media-upload-button uk-width-1-1 uk-margin-top uk-text-center">
                        <button class="uk-button uk-button-primary" @click="$refs.input.click()">
                            {{ $t('liro-media.upload.select') }}
                        </button>
                    </div>
                    <!-- Select end -->

                    <!-- File placeholder -->
                    <input style="display: none;" type="file" ref="input" multiple @change="fileSelect">
                    <!-- File placeholder end -->

                </div>
            </div>
        </div>
        <!-- Body end -->

        <!-- Footer -->
        <div class="app-media-upload-button uk-modal-footer uk-flex uk-flex-middle">
            <button class="uk-button uk-button-danger" style="margin-right: auto;" :disabled="files.length == 0" @click="fileRemove">
                {{ $t('liro-media.upload.remove_all') }}
            </button>
            <button class="uk-button uk-button-success" style="margin-left: auto;" :disabled="files.length == 0" @click="fileUpload">
                {{ $t('liro-media.upload.start') }}
            </button>
        </div>
        <!-- Footer end -->

    </div>
    <!-- Dialog end -->

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
        this.$liro.event.watch("media:update", () => this.files = []);
    },
    methods: {
        fileDrop(event) {
            _.each(event.dataTransfer.files, file => file.type != '' ? this.files.push(file) : null);
        },
        fileSelect(event) {
            _.each(this.$refs.input.files, file => this.files.push(file));
        },
        filePreview(file) {
            return URL.createObjectURL(file);
        },
        fileRemove(index) {
            isNaN(index) ? this.files = [] : this.files.splice(index, 1);
        },
        fileUpload(event) {
            this.$liro.event.emit("media:upload", this.files);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-upload", this.default);
}
</script>
