<template>
    <li :class="{ 'app-media-breadcrumb-item uk-flex uk-flex-middle': true, 'app-media-breadcrumb-disable': disabled }" @click="goto" @drop="drop" @dragover.prevent>
        <div class="uk-flex uk-flex-column">

            <!--  -->
            <div class="app-media-breadcrumb-name uk-text-truncate">
                {{ directory.name || $t('liro-media.form.root') }}
            </div>
            <!--  -->

            <!--  -->
            <div class="app-media-breadcrumb-info uk-text-truncate">
                {{ $tc('liro-media.form.element_count', count, { count: count }) }}
            </div>
            <!--  -->

        </div>
    </li>
</template>
<script>
export default {
    props: {
        disabled: {
            default() {
                return false;
            },
            type: Boolean
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
        goto(event) {
            this.$parent.$emit('media.goto', event, this.directory);
        },
        drop(event) {
            this.$parent.$emit("media.move", event, this.directory);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-breadcrumb", this.default);
}
</script>