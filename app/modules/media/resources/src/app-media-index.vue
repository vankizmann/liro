<template>
<div class="app-media">

    <!-- Infobar start -->
    <portal to="app-infobar-right">
        <app-toolbar-button href="#" class="uk-success" icon="cloud-upload" uk-toggle="target: #app-media-upload-file">
            {{ $t('liro-media.toolbar.upload') }}
        </app-toolbar-button>
        <app-toolbar-button href="#" class="uk-success" icon="folder" uk-toggle="target: #app-media-create-folder">
            {{ $t('liro-media.toolbar.folder') }}
        </app-toolbar-button>
        <app-toolbar-button href="#" uk-toggle="target: #app-module-help">
            {{ $t('liro-media.toolbar.help') }}
        </app-toolbar-button>
    </portal>
    <!-- Infobar end -->

    <!-- Help start -->
    <portal to="app-module-help">
        <h1>{{ $t('liro-media.toolbar.help') }}</h1>
    </portal>
    <!-- Help end -->

    <!-- Title start -->
    <div class="uk-margin-large">
        <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-media.backend.media.index') }}</h1>
    </div>
    <!-- Title end -->

    <div id="app-media-upload-file" class="app-media-upload-modal uk-modal-full" uk-modal>
        <button class="uk-modal-close-default uk-close-large" type="button" uk-close></button>
        <app-media-upload-file class="uk-modal-body"></app-media-upload-file>
    </div>

    <div id="app-media-create-folder" class="app-media-create-folder-modal" uk-modal>
        <button class="uk-modal-close-default uk-close-large" type="button" uk-close></button>
        <app-media-create-folder class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"></app-media-create-folder>
    </div>

    <div class="app-media-breadcrumb uk-margin">
        <ul class="app-media-breadcrumb-list uk-flex">
            <app-media-breadcrumb 
                v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" :disable="parent ? path == directory.path : true"
            ></app-media-breadcrumb>
        </ul>
    </div>

    <div class="app-media-browser uk-flex">

        <div class="app-media-browser-tree">
            <app-media-tree :directory="root"></app-media-tree>
        </div>

        <div class="app-media-browser-body">

            <div class="app-media-index uk-flex uk-flex-wrap">

                <app-media-directory 
                    v-if="parent" :directory="parent" icon="chevron-left"
                ></app-media-directory>

                <app-media-directory 
                    v-for="directory in active.directories" :key="directory.path" :directory="directory"
                ></app-media-directory>

                <app-media-file 
                    v-for="file in active.files" :key="file.path" :file="file"
                ></app-media-file>

            </div>

        </div>
    </div>

</div>
</template>

<script>
import MediaUploadFile from "./app-media-upload-file.vue";
import MediaCreateFolder from "./app-media-create-folder.vue";
import MediaBreadcrumb from "./app-media-breadcrumb.vue";
import MediaDirectory from "./app-media-directory.vue";
import MediaFile from "./app-media-file.vue";
import MediaTree from "./app-media-tree.vue";

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

        folderRoute: {
            default() {
                return "";
            },
            type: String
        },

        media: {
            default() {
                return this.$liro.data.get("media", {});
            },
            type: Object
        }
    },

    computed: {
        breadcrumb() {
            return this.$liro.func.ladderRecursive(this.root, "path", this.path, "directories", []);
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
            path: "", files: [], root: this.media
        };
    },

    mounted() {

        this.$liro.event.once("media:upload", (name, files) => {

            if (files.length == 0) {
                return;
            }

            var formData = new FormData();

            formData.append("path", this.path);

            _.each(files, (file, i) => {
                formData.append("files[" + i + "]", file);
            });

            var res = this.$http.post(this.uploadRoute, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            res.then(res => this.$liro.event.emit("media:update", res));
        });

        this.$liro.event.watch("media:update", (name, res) => {
            this.root = res.data.media;
            this.files = [];

            window.UIkit.modal('#app-media-upload-file').hide();
            window.UIkit.modal('#app-media-create-folder').hide();
        });

        this.$liro.event.watch("media:drag", (name, event, file) => {
            this.files = [file.path];
        });

        this.$liro.event.watch("media:goto", this.goto);
        this.$liro.event.watch("media:select", this.select);

        this.$liro.event.once("media:folder", (name, event, folders) => {

            var req = this.$http.post(this.folderRoute, {
                folders: folders, path: this.path
            });

            req.then(res => this.$liro.event.emit("media:update", res));
        });

        this.$liro.event.once("media:move", (name, event, folder) => {

            var req = this.$http.post(this.moveRoute, {
                files: this.files, path: folder.path
            });

            req.then(res => this.$liro.event.emit("media:update", res));
        });
    },

    methods: {
        goto(name, event, directory) {
            this.path = directory.path;
        },
        select(name, event, file) {
            this.files = _.xor(this.files, [file.path]);
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-index", this.default);
}
</script>
