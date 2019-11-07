<template>

<div class="liro-folder-index uk-flex uk-flex-1" uk-grid>

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

    <div class="uk-width-1-1">

        <div class="th-form is-reset">

            <div class="liro-media-upload uk-width-1-1">
                <liro-folder-index-upload></liro-folder-index-upload>
            </div>

            <div class="liro-media-breadcrumb uk-width-1-1">
                <ul class="uk-breadcrumb">
                    <li v-for="item in folder.ladder" :key="item.path">
                        <a href="javascript:void(0)" @click="fetchFolder(item.path)">{{ item.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="uk-flex">

                <div class="liro-media-sidebar uk-width-medium">
                    <liro-folder-index-tree></liro-folder-index-tree>
                </div>

                <div class="liro-media-content uk-flex-1">
                    <div class="uk-grid-mini" uk-grid>

                        <template v-for="dir in folder.dirs">
                            <div :key="dir.path">
                                <liro-folder-index-folder :value="dir"></liro-folder-index-folder>
                            </div>
                        </template>

                        <template v-for="file in folder.files">
                            <div :key="file.path">
                                <liro-folder-index-file :value="file"></liro-folder-index-file>
                            </div>
                        </template>

                    </div>
                </div>

            </div>

        </div>

    </div>


</div>

</template>
<script>

import AjaxMethods from './ajax';

import IndexFolder from './index/folder';
import IndexFile from './index/file';
import IndexUpload from './index/upload';
import IndexTree from './index/tree';

export default {

    computed: {

        folder: function () {
            return this.$root.folder;
        }

    },

    provide: function () {
        return {
            media: this
        };
    },

    data: function () {
        return {
            items: []
        };
    },

    mounted: function () {

        Liro.events.watch(
            'liro-media.folder@fetch', this.fetchFolder
        );

        Liro.events.watch(
            'liro-media.folder@rename', this.renameFolder
        );

        Liro.events.watch(
            'liro-media.folder@move', this.moveFolder
        );

        Liro.events.watch(
            'liro-media.folder@delete', this.deleteFolder
        );

        Liro.events.watch(
            'liro-media.file@rename', this.renameFile
        );

        Liro.events.watch(
            'liro-media.file@move', this.moveFile
        );

        Liro.events.watch(
            'liro-media.file@delete', this.deleteFile
        );
    },

    methods: {

        ...AjaxMethods,

        createFolderPrompt: function () {

            var msg = this.trans('liro-media::form.folder.name');

            var response = (res) => {
                this.createFolder(this.folder.path, res);
            };

            UIkit.modal.prompt(msg, '').then(response);
        },

        selectItem: function (path) {
            this.items = _.changeValue(this.items, path);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index', this.default);
}

</script>

