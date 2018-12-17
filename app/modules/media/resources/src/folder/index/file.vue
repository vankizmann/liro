<template>

<div class="liro-media-item is-file uk-flex uk-flex-column uk-position-relative">
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
        <div v-if="image" class="uk-text-center">
            <img :src="value.url" width="120" height="120">
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

    inject: [
        'folder'
    ],

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

            UIkit.toggle(this.$refs.dropdown);

            var message = this.trans('liro-media::form.file.name');
            UIkit.modal.prompt(message, this.value.name).then(this.renameFile);
        },

        renameFile: function (dest) {

            if ( dest == null || dest == '' ) {
                return;
            }

            var url = this.route('liro-media.ajax.file.rename');

            var file = {
                path: this.value.path, dest: dest
            };

            this.http.post(url, file).then(this.renameFileResponse);
        },

        renameFileResponse: function (res) {

            UIkit.toggle(this.$refs.dropdown);

            var message = Liro.messages.get('liro-media::message.file.renamed');
            UIkit.notification(message, 'success');
        },

        deleteFileConfirm: function () {

            var message = this.trans('liro-media::message.file.delete', {
                name: this.value.name
            });

            UIkit.modal.confirm(message).then(this.deleteFile, () => null);
        },

        deleteFile: function () {

            var url = this.route('liro-media.ajax.file.delete');

            var file = {
                path: this.value.path
            };

            this.http.post(url, file).then(this.deleteFileResponse);
        },

        deleteFileResponse: function (res) {
            var message = Liro.messages.get('liro-media::message.file.deleted');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-folder-index-file', this.default);
}


</script>

