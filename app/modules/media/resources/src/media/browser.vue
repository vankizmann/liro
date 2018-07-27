<template>
<div>

    <div class="uk-flex uk-flex-wrap">

        <div class="app-media-preview uk-width-1-1">
            <div class="app-media-preview-item" v-for="(item, index) in selected" :key="index">
                <img :src="item.url" :alt="item.name">
            </div>
        </div>
        

        <input class="uk-input uk-margin-small-right" type="text" :value="''" disabled="true">
        <button class="uk-button uk-button-primary" uk-toggle="#app-media-browser">Browser</button>
    </div>

    <div id="app-media-browser" class="app-media-browser uk-modal-container" ref="modal" uk-modal>

        <!-- Close -->
        <button class="uk-modal-close-default uk-close-large" type="button" uk-close>
            <!-- Cross -->
        </button>
        <!-- Close end -->

        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <div class="uk-modal-body">

                <div class="app-media-breadcrumb">
                    <ul class="app-media-breadcrumb-list uk-flex">
                        <app-media-breadcrumb 
                            v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" :disable="parent ? path == directory.path : true"
                        ></app-media-breadcrumb>
                    </ul>
                </div>

                <div class="app-media-index uk-flex uk-flex-wrap">

                    <app-media-directory 
                        v-if="parent" :directory="parent" icon="chevron-left"
                    ></app-media-directory>

                    <app-media-directory 
                        v-for="directory in active.directories" :key="directory.path" :directory="directory" :disabled="files" :selected="selected.indexOf(directory.path) != -1"
                    ></app-media-directory>

                    <app-media-file 
                        v-for="file in active.files" :key="file.path" :file="file" :disabled="!files" :selected="selected.indexOf(file.path) != -1"
                    ></app-media-file>

                </div>

            </div>

            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-success" type="button" :disabled="selected.length == 0" @click="setImage">{{ $t('liro-media.browser.select')}}</button>
            </div>

        </div>

    </div>
</div>
</template>
<script>
import MediaUpload from "./components/upload.vue";
import MediaCreate from "./components/create.vue";
import MediaBreadcrumb from "./components/breadcrumb.vue";
import MediaDirectory from "./components/directory.vue";
import MediaFile from "./components/file.vue";

export default {
    props: {
        value: {
            default() {
                return [];
            },
            type: Array
        },
        multiple: {
            default() {
                return true;
            },
            type: Boolean
        },
        browser: {
            default() {
                return false;
            },
            type: Boolean
        },
        files: {
            default() {
                return true;
            },
            type: Boolean
        }
    },
    computed: {
        breadcrumb() {
            return this.liro.func.ladderRecursive(this.media, "path", this.path, "directories", []);
        },
        active() {
            return _.nth(this.breadcrumb, -1);
        },
        parent() {
            return _.nth(this.breadcrumb, -2);
        }
    },
    data() {
        return {
            path: this.value,
            selected: [],
            media: this.liro.data.get("media", {})
        };
    },
    mounted() {
        this.liro.event.watch("media:goto", (name, event, folder) => {
            this.path = folder.path;
        });

        this.liro.event.watch("media:select", (name, event, item) => {
            this.selected = [item]
        });
    },

    methods: {
        setImage() {
            this.$emit("input", this.selected);
            window.UIkit.modal(this.$refs.modal).hide();
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-browser", this.default);
}
</script>
