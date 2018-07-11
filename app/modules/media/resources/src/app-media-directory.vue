<template>
    <div class="app-media--folder" @click="$liro.event.emit('media:goto', directory.path)">
        <div class="app-media--folder--card">
            <div class="app-media--folder--card-icon"><span uk-icon="folder"></span></div>
            <div class="app-media--folder--card-title">{{ directory.name }}</div>
            <div class="app-media--folder--card-info">{{ directory.directories.length + directory.files.length }} items</div>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        directory: {
            default() {
                return {};
            },
            type: Object
        }
    }

}

if (window.liro) {
    liro.vue.$component('app-media-directory', this.default);
} 

</script>
