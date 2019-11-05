<template>

<div class="liro-media-tree">
    <ul class="liro-media-tree-list uk-nav">
         <liro-folder-index-tree-item :value="tree" :root="true"></liro-folder-index-tree-item>
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
