<template>
<div class="app-media-create" uk-modal>

    <!-- Close -->
    <button class="uk-modal-close-default uk-close-large" type="button" uk-close>
        <!-- Cross -->
    </button>
    <!-- Close end -->

    <!-- Dialog -->
    <div class="app-media-create uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <div class="uk-flex uk-flex-center uk-flex-middle">

            <!-- Input -->
            <input class="uk-input uk-margin-small-right" type="text" :placeholder="$t('liro-media.placeholder.folder')" autofocus="true" v-model="folder" @keyup.enter="createFolder">
            <!-- Input end -->

            <!-- Button -->
            <button class="uk-button uk-button-primary" :disabled="folder == ''" @click="createFolder">
                {{ $t('liro-media.form.create') }}
            </button>
            <!-- Button end -->

        </div>
    </div>
    <!-- Dialog end -->

</div>
</template>
<script>
export default {
    data() {
        return {
            folder: ''
        };
    },
    mounted() {
        this.$liro.event.watch("media.update", () => this.folder = '');
    },
    methods: {
        createFolder(event) {
            this.$parent.$emit('media.folder', event, [this.folder]);
       }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-create", this.default);
}
</script>
