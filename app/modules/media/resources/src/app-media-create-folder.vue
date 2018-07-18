<template>
<div class="app-media-create-folder uk-flex uk-flex-center uk-flex-middle">
    <input class="uk-input uk-margin-small-right" type="text" :placeholder="$t('liro-media.placeholder.folder')" autofocus="true" v-model="folder" @keyup.enter="createFolder">
    <button :class="{ 'uk-button uk-button-primary': true, 'uk-disabled': folder == '' }" @click="createFolder">{{ $t('liro-media.form.create') }}</button>
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
        this.$liro.event.watch("media:update", () => this.folder = '');
    },
    methods: {
        createFolder(event) {
            this.$liro.event.emit('media:folder', event, [this.folder]);
       }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-create-folder", this.default);
}
</script>
