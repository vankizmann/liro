<template>
    <div class="app-media--card-white" :data-path="file.path" @click="$emit('click')" ref="card">
        <div class="app-media--card-white--body">
            
            <div class="app-media--card-white--icon">

                <img v-if="file.mime == 'image/jpeg'" :data-src="file.url" uk-img>
                <img v-else-if="file.mime == 'image/png'" :data-src="file.url" uk-img>
                <span v-else uk-icon="file"></span>
            </div>

            <div class="app-media--card-white--title">
                {{ file.name }}
            </div>
            
            <div class="app-media--card-white--info">
                {{ size }}
            </div>

        </div>
    </div>
</template>
<script>
export default {
    computed: {
        size() {
            if ( this.file.size > 1024 * 1024 * 1024 ) {
                return (this.file.size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
            }

            if ( this.file.size > 1024 * 1024 ) {
                return (this.file.size / (1024 * 1024)).toFixed(2) + ' MB';
            }

            return (this.file.size / 1024).toFixed(2) + ' KB';
        }
    },
    props: {
        file: {
            default() {
                return {};
            },
            type: Object
        }
    },
    mounted() {
        $(this.$refs.card).attr('ondragstart', "liro.event.emit('media:drag', event)");
        $(this.$refs.card).attr('draggable', "true");
    }
}

if (window.liro) {
    liro.vue.$component('app-media-file', this.default);
} 
</script>
