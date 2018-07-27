<template>
<div :class="{ 'app-media-index-file uk-flex uk-flex-column uk-flex-middle uk-padding-small': true, 'uk-selected': selected }" :draggable="selected" @drag="dragEvent" @click="clickEvent">

    <div class="app-media-index-file-image uk-flex uk-flex-middle uk-flex-center">
        <img v-if="['image/jpeg', 'image/png'].indexOf(file.type) != -1" :src="file.url" :alt="file.name" :title="file.name">
        <span v-else uk-icon="question"></span>
    </div>

    <div class="app-media-index-file-name uk-text-center uk-text-truncate uk-margin-top">
        {{ file.name || $t('liro-media.form.root') }}
    </div>

    <div class="app-media-index-file-info uk-text-center uk-text-truncate uk-margin-small-bottom">
        {{ size }}
    </div>

</div>
</template>

<script>
export default {
    props: {
        file: {
            default() {
                return {};
            },
            type: Object
        },
        selected: {
            default() {
                return false;
            },
            type: Boolean
        },
        disabled: {
            default() {
                return false;
            },
            type: Boolean
        }
    },
    computed: {
        size() {
            if (this.file.size > 1024 * 1024 * 1024) {
                return (this.file.size / ( 1024 * 1024 * 1024)).toFixed(2) + " GB";
            }

            if (this.file.size > 1024 * 1024) {
                return (this.file.size / (1024 * 1024)).toFixed(2) + " MB";
            }

            return (this.file.size / 1024).toFixed(2) + " KB";
        }
    },
    methods: {
        dragEvent(event) {
            if ( !this.disabled ) this.$liro.event.emit("media:drag", event, this.file);
        },
        clickEvent(event) {
            if ( !this.disabled ) this.liro.event.emit("media:select", event, this.file);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-file", this.default);
}
</script>
