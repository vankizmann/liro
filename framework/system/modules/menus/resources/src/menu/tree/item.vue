<template>

    <div :class="{ 'liro-menu-tree-item': true, 'is-hidden': value.hide == 1, 'is-disabled': value.state == 0 }">
        <div class="uk-flex uk-flex-middle">

            <div v-if="value.children.length != 0" class="uk-flex-none uk-margin-small-right">
                <div class="liro-menu-tree-item-icon">
                    <a class="is-folder" href="javascript:void(0)" @click.stop="value.collapsed = !value.collapsed">
                        <span class="uk-icon-small" :uk-icon="value.collapsed ? 'chevron-right' : 'chevron-down'"></span>
                    </a>
                </div>
            </div>

            <div class="uk-flex-none uk-margin-small-right">
                <div class="liro-menu-tree-item-icon">
                    <a v-if="value.children.length == 0" class="is-file" href="javascript:void(0)">
                        <img src="/app/system/modules/theme/resources/dist/images/file.svg" width="20" height="20" uk-svg>
                    </a>
                    <a v-if="value.children.length != 0" class="is-folder" href="javascript:void(0)">
                        <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="20" height="20" uk-svg>
                    </a>
                </div>
            </div>

            <div class="uk-flex-auto">
                <div class="liro-menu-tree-item-title">
                    <a :href="route('liro-menus.admin.menu.edit', { menu: value.id })">
                        <span>{{ value.trans_title }}</span>
                    </a>
                </div>
            </div>

            <div class="uk-flex-none uk-margin-small-left">
                <div class="liro-menu-tree-item-count uk-flex-none">
                    <span class="uk-text-truncate">{{ value.children.length || '-' }}</span>
                </div>
            </div>

        </div>
    </div>

</template>
<script>

    export default {

        props: {

            value: {
                required: true,
                type: Object
            }

        },

        methods: {

            /**
             * Show prompt and handle input
             */
            updateMenuRoute: function () {
                var message = Liro.messages.get('liro-menus::form.menu.route');
                UIkit.modal.prompt(message, this.value.route).then(this.updateMenuRouteInput);
            },

            /**
             * Apply route to value or set default if given
             */
            updateMenuRouteInput: function (input) {
                if (input != null) this.value.route = input || '/';
            },

            /**
             * Submit ajax request with changed state
             */
            updateMenuState: function () {

                var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                    menu: this.value.id
                });

                var menu = _.merge(this.value, {
                    state: this.value.state ? 0 : 1
                });

                Axios.put(url, menu).then(this.updateMenuResponse);
            },

            /**
             * Submit ajax request with changed hide
             */
            updateMenuHide: function () {

                var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                    menu: this.value.id
                });

                var menu = _.merge(this.value, {
                    hide: this.value.hide ? 0 : 1
                });

                Axios.put(url, menu).then(this.updateMenuResponse);
            },

            /**
             * Submit ajax request with changed default
             */
            updateMenuDefault: function () {

                var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                    menu: this.value.id
                });

                var menu = _.merge(this.value, {
                    default: this.value.default ? 0 : 1
                });

                Axios.put(url, menu).then(this.updateMenuResponse);
            },

            /**
             * Show success message and save value
             */
            updateMenuResponse: function (res) {

                var message = Liro.messages.get('liro-menus::message.menu.saved');
                UIkit.notification(message, 'success');

                this.$emit('input', res.data.user);
            }

        }

    }


</script>

