<template>
<div class="app-media-index-folder uk-flex uk-flex-column uk-flex-middle uk-padding-small" draggable="true" @click="gotoEvent" @drag="dragEvent" @drop="dropEvent" @dragover.prevent>

    <div class="app-media-index-folder-image uk-flex uk-flex-middle uk-flex-center">
        <span :uk-icon="icon"></span>
    </div>

    <div class="app-media-index-folder-name uk-text-center uk-text-truncate uk-margin-top">
        {{ directory.name || $t('liro-media.form.root') }}
    </div>

    <div class="app-media-index-folder-info uk-text-center uk-text-truncate uk-margin-small-bottom">
        {{ $tc('liro-media.form.element_count', count, { count: count }) }}
    </div>


</div>
</template>

<script>
export default {
    props: {
        icon: {
            default() {
                return "folder";
            },
            type: String
        },
        directory: {
            default() {
                return {};
            },
            type: Object
        }
    },
    computed: {
        count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    methods: {
        gotoEvent(event) {
            this.$liro.event.emit("media:goto", event, this.directory);
        },
        dropEvent(event) {
            this.$liro.event.emit("media:move", event, this.directory);
        },
        dragEvent(event) {
            this.$liro.event.emit("media:drag", event, this.directory);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-directory", this.default);
}
</script>
