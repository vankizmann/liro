<template>
<div>
    <button class="uk-button uk-button-primary" uk-toggle="#app-media-browser">Browser</button>
    <div id="app-media-browser" class="app-media-browser uk-modal-container" uk-modal>

        <!-- Close -->
        <button class="uk-modal-close-default uk-close-large" type="button" uk-close>
            <!-- Cross -->
        </button>
        <!-- Close end -->

        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <!-- Dialog -->
            <div class="uk-modal-body">
                <app-media-index :move-route="moveRoute" :upload-route="uploadRoute" :create-route="createRoute" :browser="true"></app-media-index>
            </div>
            <!-- Dialog end -->

            <!-- Footer -->
            <div class="app-media-upload-button uk-modal-footer uk-flex uk-flex-middle">
                <button class="uk-button uk-button-success" style="margin-left: auto;" :disabled="true">
                    {{ $t('liro-media.upload.start') }}
                </button>
            </div>
            <!-- Footer end -->
        
        </div>

    </div>
</div>
</template>
<script>
export default {
    props: {
        moveRoute: {
            default() {
                return "";
            },
            type: String
        },
        uploadRoute: {
            default() {
                return "";
            },
            type: String
        },
        createRoute: {
            default() {
                return "";
            },
            type: String
        },
    }
}

if (window.liro) {
    liro.vue.$component("app-media-browser", this.default);
}
</script>
