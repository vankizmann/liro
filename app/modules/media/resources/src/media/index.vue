<template>
<div class="app-media">

    <!-- Infobar start -->
    <portal v-if="browser == false" to="app-infobar-right">
        <app-toolbar-button href="#" :disabled="true" uk-toggle="target: #app-module-help">
            {{ $t('liro-media.toolbar.help') }}
        </app-toolbar-button>
    </portal>
    <!-- Infobar end -->

    <!-- Toolbar start -->
    <portal v-if="browser == false" to="app-toolbar-left">
        <app-toolbar-button href="#" icon="cloud-upload" uk-toggle="target: #app-media-upload">
            {{ $t('liro-media.toolbar.upload') }}
        </app-toolbar-button>
        <app-toolbar-button href="#" icon="folder" uk-toggle="target: #app-media-create">
            {{ $t('liro-media.toolbar.folder') }}
        </app-toolbar-button>
    </portal>
    <portal to="app-toolbar-right">
        <app-toolbar-button href="#" icon="trash" :disabled="files.length == 0">
            {{ $t('liro-media.toolbar.delete') }}
        </app-toolbar-button>
    </portal>
    <!-- Toolbar end -->

    <!-- Help start -->
    <portal v-if="browser == false" to="app-module-help">
        <h1>{{ $t('liro-media.toolbar.help') }}</h1>
    </portal>
    <!-- Help end -->

    <!-- Title start -->
    <div v-if="browser == false" class="uk-margin-large">
        <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-media.backend.media.index') }}</h1>
    </div>
    <!-- Title end -->

    <app-media-upload v-if="browser == false" id="app-media-upload"></app-media-upload>
    <app-media-create v-if="browser == false" id="app-media-create"></app-media-create>

    <div class="app-media-breadcrumb">
        <ul class="app-media-breadcrumb-list uk-flex">
            <app-media-breadcrumb 
                v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" :disable="parent ? path == directory.path : true"
            ></app-media-breadcrumb>
        </ul>
    </div>

    <div class="app-media-browser uk-flex">

        <div v-if="browser == false" class="app-media-browser-tree">
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
import MediaUpload from "./components/upload.vue";
import MediaCreate from "./components/create.vue";
import MediaBreadcrumb from "./components/breadcrumb.vue";
import MediaDirectory from "./components/directory.vue";
import MediaFile from "./components/file.vue";
import MediaTree from "./components/tree.vue";

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

        browser: {
            default() {
                return false;
            },
            type: Boolean
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
        setTimeout(() => this.test = false, 3000)
        return {
            path: "", files: [], root: this.media, test: true
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


            if ( window.UIkit.modal('#app-media-upload') ) {
                window.UIkit.modal('#app-media-upload').hide();
            }

            if ( window.UIkit.modal('#app-media-create') ) {
                window.UIkit.modal('#app-media-create').hide();
            }

        });

        this.$liro.event.watch("media:drag", this.dragEvent);

        this.$liro.event.watch("media:goto", this.gotoEvent);
        this.$liro.event.watch("media:select", this.selectEvent);

        this.$liro.event.once("media:folder", this.folderEvent);
        this.$liro.event.once("media:move", this.moveEvent);
    },

    methods: {
        dragEvent(name, event, file) {
            this.files = [file.path];
        },
        gotoEvent(name, event, directory) {
            this.path = directory.path;
        },
        selectEvent(name, event, file) {
            this.files = _.xor(this.files, [file.path]);
        },
        folderEvent(name, event, folders) {

            var req = this.$http.post(this.createRoute, {
                folders: folders, path: this.path
            });

            req.then(res => this.$liro.event.emit("media:update", res));
        },
        moveEvent(name, event, folder) {

            var req = this.$http.post(this.moveRoute, {
                files: this.files, path: folder.path
            });

            req.then(res => this.$liro.event.emit("media:update", res));
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-index", this.default);
}
</script>
