<template>

<div class="liro-folder-index">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" href="javascript:void(0)" @click="createFolderPrompt">
                <i class="uk-margin-small-right" uk-icon="folder"></i> {{ trans('liro-media::admin.folder.create') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="fetchFolder(folder.path)">
                <i class="uk-margin-small-right" uk-icon="sync"></i> {{ trans('theme::form.toolbar.sync') }}
            </a>

        </div>
    </portal>

    <div class="uk-margin-bottom">
        <liro-folder-index-upload></liro-folder-index-upload>
    </div>

    <div class="uk-margin-bottom">
        <ul class="uk-breadcrumb">
            <li v-for="(path, index) in folder.ladder" :key="index">
                <a href="javascript:void(0)" @click="fetchFolder(path)">{{ index }}</a>
            </li>
        </ul>
    </div>

    <div class="uk-grid-small" uk-grid>

        <template v-for="(dir, index) in folder.dirs">
            <div :key="index">
                <liro-folder-index-folder v-model="folder.dirs[index]"></liro-folder-index-folder>
            </div>
        </template>

        <template v-for="(file, index) in folder.files">
            <div :key="index">
                <liro-folder-index-file v-model="folder.files[index]"></liro-folder-index-file>
            </div>
        </template>

    </div>
</div>

</template>
<script>

import IndexFolder from './index/folder';
import IndexFile from './index/file';
import IndexUpload from './index/upload';

export default {

    computed: {

        folder: function () {
            return this.$root.folder;
        }

    },

    methods: {

        fetchFolder: function (path) {

            var url = this.route('liro-media.ajax.folder.index', null, {
                path: path != null ? path : this.folder.path
            });

            this.http.get(url).then(this.fetchFolderResponse);
        },

        fetchFolderResponse: function (res) {
            this.$root.folder = res.data;
        },

        createFolderPrompt: function () {
            var message = this.trans('liro-media::form.folder.name');
            UIkit.modal.prompt(message, '').then(this.createFolder);
        },

        createFolder: function (name) {

            if ( name == null || name == '' ) {
                return;
            }

            var url = this.route('liro-media.ajax.folder.create');

            var folder = {
                path: this.folder.path, name: name
            };

            this.http.post(url, folder).then(this.createFolderResponse);
        },

        createFolderResponse: function (res) {
            var message = this.trans('liro-media::message.folder.created');
            UIkit.notification(message, 'success');
        }

    },

    provide: function () {
        return {
            folder: this
        };
    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index', this.default);
}

</script>

