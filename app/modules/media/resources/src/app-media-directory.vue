<template>
    <div class="app-media--card-blue" :data-path="directory.path" @click="$emit('click', directory)" ref="card">
        <div class="app-media--card-blue--body">

            <div class="app-media--card-blue--icon">
                <span uk-icon="folder"></span>
            </div>

            <div class="app-media--card-blue--title">
                {{ directory.name }}
            </div>

            <div class="app-media--card-blue--info">
                {{ $tc('liro-media.form.element_count', count, { count: count }) }}
            </div>

        </div>
    </div>
</template>
<script>
export default {
    computed: {
        count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    props: {
        directory: {
            default() {
                return {};
            },
            type: Object
        }
    },
    mounted() {
        $(this.$refs.card).attr('ondrop', "liro.event.emit('media:move', event)");
        $(this.$refs.card).attr('ondragover', "event.preventDefault()");
    }
}

if (window.liro) {
    liro.vue.$component('app-media-directory', this.default);
} 
</script>
