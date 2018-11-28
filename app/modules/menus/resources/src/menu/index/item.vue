<template>

<div class="th-table-tr uk-flex uk-flex-middle">

    <div class="uk-flex-0">
        <a :class="{ 'uk-disabled': value.children.length == 0 }" href="javascript:void(0)" @click="toggleCollapsed">
            <i :uk-icon="collapsed.active(value.id) || value.children.length == 0 ? 'chevron-right' : 'chevron-down'"></i>
        </a>
    </div>

    <div class="uk-flex-1">
        <a :href="Liro.routes.get('liro-menus.menu.edit', { menu: value.id })">
            {{ value.title }}
        </a>
    </div>

    <div class="th-icon-hover uk-width-medium uk-flex uk-flex-left uk-flex-middle">
        <span class="uk-margin-small-right">
            {{ value.route }}
        </span>
        <a href="javascript:void(0)" @click="updateMenuRoute">
            <i uk-icon="pencil"></i>
        </a>
    </div>

    <div class="uk-width-small uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateMenuState"></app-list-switch>
    </div>

    <div class="uk-width-small uk-text-center">
        <app-list-switch class="is-hide" :active="value.hide" @click="updateMenuHide"></app-list-switch>
    </div>

    <div class="uk-width-small uk-text-center">
        <span>{{ value.id }}</span>
    </div>

</div>

</template>
<script>

export default {

    props: {

        /**
         * Value property
         */
        value: {
            required: true,
            type: Object
        },

        /**
         * Collapsed helper
         */
        collapsed: {
            // required: true,
            type: Object
        }

    },

    /**
     * Apply styles when update is done
     */
    updated: function () {
        this.collapsed.styles();
    },

    methods: {

        /**
         * Toggle id in collaped and force view update
         */
        toggleCollapsed: function () {
            this.collapsed.toggle(this.value.id);
            this.$forceUpdate();
        },

        /**
         * Show prompt and handle input
         */
        updateMenuRoute: function () {
            UIkit.modal.prompt(Liro.messages.get('liro-menus::form.menu.route'), this.value.route).then(this.updateMenuRouteInput);
        },

        /**
         * Apply route to value or set default if given
         */
        updateMenuRouteInput: function (input) {
            if ( input != null ) {
                this.value.route = input || '/';
            }
        },

        /**
         * Submit ajax request with changed state
         */
        updateMenuState: function () {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed hide
         */
        updateMenuHide: function () {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                hide: this.value.hide ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateMenuResponse);
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

if (window.Liro) {
    Liro.vue.component('liro-menu-index-item', this.default);
}


</script>

