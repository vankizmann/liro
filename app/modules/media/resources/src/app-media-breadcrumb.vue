<template>
    <li class="app-media--breadcrumb-item" @click="$emit('click')">

        <!--  -->
        <div class="app-media--breadcrumb-item--title">
            {{ directory.name || $t('liro-media.form.root') }}
        </div>
        <!--  -->

        <!--  -->
        <div class="app-media--breadcrumb-item--info">
            {{ $tc('liro-media.form.element_count', count, { count: count }) }}
        </div>
        <!--  -->

    </li>
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
    }
}

if (window.liro) {
    liro.vue.$component('app-media-breadcrumb', this.default);
}
</script>