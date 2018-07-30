<template>
    <div class="app-media-tree-folder">

        <!-- Folder -->
        <div class="app-media-tree-item uk-flex uk-flex-middle" @click="gotoEvent" @drop="moveEvent" @dragover.prevent>

            <!-- Icon -->
            <div class="app-media-tree-icon">
                <span uk-icon="folder"></span>
            </div>
            <!-- Icon end -->

            <!-- Name -->
            <div class="app-media-tree-name">
                {{ directory.name || $t('liro-media.form.root') }}
            </div>
            <!-- Name end -->

            <!-- Count -->
            <div class="app-media-tree-count">
                {{ count }}
            </div>
            <!-- Count end -->

        </div>
        <!-- Folder end -->

        <!-- Subtree -->
        <app-media-tree 
            v-for="(item, index) in directory.directories" :key="index" :directory="item"
        ></app-media-tree>
        <!-- Subtree end -->

    </div>
</template>
<script>
export default {
    props: {

        /**
         * Current directory
         */
        directory: {
            default() {
                return {};
            },
            type: Object
        }

    },
    computed: {

        /**
         * Item count
         */
        count() {
            return this.directory.directories.length + this.directory.files.length;
        }

    },
    methods: {

        /**
         * Trigger media goto event
         */
        gotoEvent(event) {
            this.$parent.$emit('media.goto', event, this.directory);
        },

        /**
         * Trigger media move event
         */
        moveEvent(event) {
            this.$parent.$emit('media.move', event, this.directory);
        }

    },
    mounted() {

        /**
         * Pass goto event to parent
         */
        this.$on('media.goto', (event, directory) => this.$parent.$emit('media.goto', event, directory));

        /**
         * Pass move event to parent
         */
        this.$on('media.move', (event, directory) => this.$parent.$emit('media.move', event, directory));

    }
}

if (window.liro) {
    liro.vue.$component('app-media-tree', this.default);
} 
</script>
