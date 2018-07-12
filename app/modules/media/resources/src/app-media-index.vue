<template>
    <div class="app-media">

        <!-- Infobar start -->
        <portal to="app-infobar-right">
            <app-toolbar-link class="uk-success" icon="plus" :href="''">
                {{ $t('liro-menus.toolbar.create') }}
            </app-toolbar-link>
            <app-toolbar-link uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Infobar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>{{ $t('liro-menus.toolbar.help') }}</h1>
        </portal>
        <!-- Help end -->

        <!-- Title start -->
        <div class="uk-margin-large">
            <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-menus.backend.menus.index') }}</h1>
        </div>
        <!-- Title end -->

        <div class="app-media--dropzone" style="background-color: red; height: 400px;" ondrop="liro.event.emit('media:upload', event)"  ondragover="event.preventDefault()">
            <input type="file" id="files" ref="files" multiple v-on:change="test()"/>
        </div>

        <div class="app-media--breadcrumb">
            <ul class="app-media--breadcrumb--list uk-flex">
                <app-media-breadcrumb v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" @click="goto(directory.path)"></app-media-breadcrumb>
            </ul>
        </div>


        <div class="app-media--cards uk-flex uk-flex-wrap">
            <div 
                class="app-media--card-blue" v-if="parent" @click="goto(parent.path)" :data-path="parent.path" 
                ondrop="liro.event.emit('media:move', event)" ondragover="event.preventDefault()"
            >
                <div class="app-media--card-blue--body">
                    <div class="app-media--card-blue--icon"><span uk-icon="chevron-left"></span></div>
                </div>
            </div>

            <app-media-directory 
                v-for="directory in active.directories" :key="directory.path" :directory="directory" @click="goto(directory.path)"
            ></app-media-directory>

            <app-media-file
                v-for="file in active.files" :key="file.path" :file="file"
            ></app-media-file>
        </div>
    </div>
</template>
<script>
import MediaBreadcrumb from './app-media-breadcrumb.vue';
import MediaDirectory from './app-media-directory.vue';
import MediaFile from './app-media-file.vue';

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

        this.$liro.event.once('media:upload', (name, event) => {

            event.preventDefault();

            var formData = new FormData();

            _.each(event.dataTransfer.files, (file, i) => {
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

        this.$liro.event.watch('media:drag', (name, event) => {
            event.dataTransfer.setData('path', $(event.target).data('path') || $(event.target).parents('[data-path]').data('path'));
        });

        this.$liro.event.once('media:move', (name, event) => {

            var req = this.$http.post(this.moveRoute, {
                source: event.dataTransfer.getData('path'), target: $(event.target).data('path') || $(event.target).parents('[data-path]').data('path')
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
