<template>
    <div class="app-media">

        <!-- Infobar start -->
        <portal to="app-infobar-right">
            <app-toolbar-button href="#" class="uk-success" icon="cloud-upload" uk-toggle="target: #app-media-upload">
                {{ $t('liro-media.toolbar.upload') }}
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

        <div class="app-media-breadcrumb uk-margin">
            <ul class="app-media-breadcrumb-list uk-flex">
                <app-media-breadcrumb 
                    v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" :disable="parent ? path == directory.path : true" @click="goto(directory.path)"
                ></app-media-breadcrumb>
            </ul>
        </div>

        <div class="app-media-browser uk-flex">

            <div class="app-media-browser-tree">
                <app-media-tree :directory="root"></app-media-tree>
            </div>
            
            <div class="app-media-browser-body">

                <app-media-upload id="app-media-upload" hidden></app-media-upload>

                <div class="app-media-index uk-flex uk-flex-wrap">

                    <app-media-directory 
                        v-if="parent" :directory="parent" @click="goto(parent.path)" icon="chevron-left"
                    ></app-media-directory>

                    <app-media-directory 
                        v-for="directory in active.directories" :key="directory.path" :directory="directory" @click="goto(directory.path)"
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
import MediaBreadcrumb from './app-media-breadcrumb.vue';
import MediaUpload from './app-media-upload.vue';
import MediaDirectory from './app-media-directory.vue';
import MediaFile from './app-media-file.vue';
import MediaTree from './app-media-tree.vue';

export default {

    props: {

        moveRoute: {
            default() {
                return '';
            },
            type: String
        },

        uploadRoute: {
            default() {
                return '';
            },
            type: String
        },

        media: {
            default() {
                return this.$liro.data.get('media', {});
            },
            type: Object
        }

    },

    computed: {

        breadcrumb() {
            return this.$liro.func.ladderRecursive(this.root, 'path', this.path, 'directories', []);
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
            path: '', root: this.media
        };

    },

    mounted() {

        this.$liro.event.once('media:upload', (name, files) => {

            if ( files.length == 0 ) {
                return;
            }

            var formData = new FormData();

            _.each(files, (file, i) => {
                formData.append('files[' + i + ']', file);
            });

            var res = this.$http.post(this.uploadRoute, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            res.then((res) => this.$liro.event.emit('media:update', res));

        });

        this.$liro.event.watch('media:update', (name, res) => {
            this.root = res.data.media;
        });

        this.$liro.event.watch('media:goto', (name, event, directory) => {
            this.path = directory.path;
        });

        this.$liro.event.watch('media:drag', (name, event, file) => {
            this.$liro.data.set('media:drag', [file.path]);
        });

        this.$liro.event.once('media:move', (name, event, folder) => {

            var req = this.$http.post(this.moveRoute, {
                sources: this.$liro.data.get('media:drag'), target: folder.path
            });

            req.then((res) => this.$liro.event.emit('media:update', res));
        });

    },

    methods: {

        goto(path) {
            this.path = path;
        },

        test() {
            console.log('test');
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-media-index', this.default);
} 

</script>
