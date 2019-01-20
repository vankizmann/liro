<template>

    <div class="liro-menu-tree-item uk-width-1-1 uk-flex uk-flex-middle">

        <div class="liro-menu-tree-item-icon uk-flex-none uk-flex uk-flex-middle">
            <a v-if="value.children.length == 0" class="is-file" href="javascript:void(0)" @click="toggleCollapsed">
                <img src="/app/system/modules/theme/resources/dist/images/file.svg" width="18" height="18" uk-svg>
            </a>
            <a v-if="value.children.length != 0" class="is-folder" href="javascript:void(0)" @click="toggleCollapsed">
                <img src="/app/system/modules/theme/resources/dist/images/folder.svg" width="18" height="18" uk-svg>
            </a>
        </div>

        <div class="liro-menu-tree-item-title uk-flex-auto uk-flex uk-flex-middle">
            <a :href="route('liro-menus.admin.menu.edit', { menu: value.id })">
                <span class="uk-text-truncate">
                    {{ value.trans_title }}
                </span>
            </a>
        </div>

        <div v-if="value.children.length != 0" class="liro-menu-tree-item-count uk-flex-none uk-flex uk-flex-middle">
            <span class="uk-text-truncate">
                {{ value.children.length }}
            </span>
        </div>

    </div>

</template>
<script>

    export default {

        props: {

            value: {
                required: true,
                type: Object
            },

            collapsed: {
                required: true,
                type: Object
            }

        },

        updated: function () {
            this.collapsed.styles();
        },

        methods: {

            toggleCollapsed: function () {
                this.collapsed.toggle(this.value.id);
                this.$forceUpdate();
            },

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

