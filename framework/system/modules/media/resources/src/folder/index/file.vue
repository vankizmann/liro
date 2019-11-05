<template>

<div ref="file" :class="{ 'liro-media-item is-file uk-flex uk-flex-column uk-position-relative': true, 'is-selected': media.items.indexOf(value.path) != -1 }"
     draggable="true" @dragstart="dragFile" @dragend="dragFileEnd" @click="media.selectItem(value.path)">
    <div class="liro-media-icon uk-margin-auto-top">
        <div v-if="image" class="uk-text-center">
            <img :src="value.url" width="80" height="80" draggable="false">
        </div>
        <div v-else class="uk-text-center">
            <img src="/app/system/modules/theme/resources/dist/images/file.svg" width="80" height="80" uk-svg>
        </div>
    </div>
    <div class="liro-media-name uk-margin-auto-top">
        <div class="uk-text-center">
            <div class="uk-text-truncate uk-overflow-hidden" :uk-tooltip="value.name">
                <span>{{ value.name }}</span>
            </div>
        </div>
        <div class="uk-text-center uk-text-muted uk-text-small">
            <div class="uk-text-truncate uk-overflow-hidden">
                <span>{{ value.human }}</span>
            </div>
        </div>
    </div>
</div>

</template>
<script>

export default {

    inject: [
        'media'
    ],

    computed: {

        folder: function () {
            return this.$root.folder;
        }

    },

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    computed: {

        image: function (type) {
            return _.includes([
                'image/jpg', 'image/jpeg', 'image/png', 'image/gif'
            ], this.value.type)
        }

    },

    methods: {

        test: function () {
            console.log('foobar');
        },

        renameFilePrompt: function () {

            var message = this.trans('liro-media::form.file.name');

            var response = (input) => {
                Liro.events.emit('liro-media.file@rename', this.value.path, input);
            }

            UIkit.modal.prompt(message, this.value.name).then(response);
        },

        deleteFileConfirm: function () {

            var message = this.trans('liro-media::message.file.delete', {
                name: this.value.name
            });

            var response = () => {
                Liro.events.emit('liro-media.file@delete', this.value.path);
            }

            UIkit.modal.confirm(message).then(response, () => null);
        },

        dragFile: function (event) {
            $(this.$refs.file).addClass('is-ghost');
            event.dataTransfer.setData('file', this.value.path);
        },

        dragFileEnd: function () {
            $(this.$refs.file).removeClass('is-ghost');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-file', this.default);
}


</script>

