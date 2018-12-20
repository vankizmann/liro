<template>

<div ref="file" class="liro-media-item is-file uk-flex uk-flex-column uk-position-relative" draggable="true" @dragstart="dragFile" @dragend="dragFileEnd">
    <div class="liro-media-options uk-position-top-right">
        <a href="javascript:void(0)">
            <i class="uk-icon-small" uk-icon="chevron-down"></i>
        </a>
        <div ref="dropdown" uk-dropdown="mode: click; pos: bottom-center;">
            <ul class="uk-nav">
                <li>
                    <a href="javascript:void(0)" @click="renameFilePrompt">
                        <span>{{ trans('theme::form.toolbar.rename') }}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" @click.capture="deleteFileConfirm">
                        <span>{{ trans('theme::form.toolbar.delete') }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="liro-media-icon uk-margin-auto-top">
        <div v-if="image && true == false" class="uk-text-center">
            <img :src="value.url" width="120" height="120" draggable="false">
        </div>
        <div v-else class="uk-text-center">
            <img src="/app/system/modules/theme/resources/dist/images/file.svg" width="80" height="80" uk-svg>
        </div>
    </div>
    <div class="liro-media-name uk-margin-auto-top ">
        <div class="uk-margin-top uk-text-center">
            <div class="uk-text-truncate" style="overflow: hidden;" :uk-tooltip="value.name">
                <span>{{ value.name }}</span>
            </div>
        </div>
        <div class="uk-text-center uk-text-muted uk-text-small">
            <span>{{ value.human }}</span>
        </div>
    </div>
</div>

</template>
<script>

export default {

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

