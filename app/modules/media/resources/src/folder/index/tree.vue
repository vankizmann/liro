<template>

<div class="liro-media-tree">
    <legend class="liro-media-tree-legend">
        <span>{{ trans('liro-media::form.folder.root') }}</span>
    </legend>
    <ul class="liro-media-tree-list uk-nav">
         <liro-folder-index-tree-item v-for="(dir, index) in tree" :key="index" :value="dir"></liro-folder-index-tree-item>
    </ul>
</div>

</template>
<script>

import IndexTreeItem from './tree-item';

export default {

    computed: {

        folder: function () {
            return this.$root.folder;
        },

        tree: function () {
            return this.$root.tree;
        }

    },

    provide: function () {
        return {
            tree: this
        }
    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-tree', this.default);
}

</script>
