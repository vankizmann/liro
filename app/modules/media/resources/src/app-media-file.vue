<template>
    <div class="app-media--file">
        <div class="app-media--file--card">
            <div class="app-media--file--card-icon"><span uk-icon="file"></span></div>
            <div class="app-media--file--card-title">{{ file.name }}</div>
            <div class="app-media--file--card-info">Dateigröße: 320kb</div>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        file: {
            default() {
                return {};
            },
            type: Object
        }
    }

}

if (window.liro) {
    liro.vue.$component('app-media-file', this.default);
} 

</script>
