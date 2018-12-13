<template>

<div class="th-table-tr uk-flex uk-flex-middle">

    <div class="th-table-td-xs">
        <a :class="{ 'uk-disabled': value.children.length == 0 }" href="javascript:void(0)" @click="toggleCollapsed">
            <i class="uk-icon-small" :uk-icon="collapsed.active(value.id) || value.children.length == 0 ? 'chevron-right' : 'chevron-down'"></i>
        </a>
    </div>

    <div class="uk-width-1-1 uk-flex uk-flex-middle">
        <a class="uk-margin-right" :href="route('liro-menus.admin.menu.edit', { menu: value.id })">
            {{ value.trans_title }}
        </a>
        <a class="uk-label" href="javascript:void(0)" @click="updateMenuRoute">
             <span>{{ value.route }}</span>
        </a>
    </div>

    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-default" :active="value.default" @click="updateMenuDefault"></app-list-switch>
    </div>

    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateMenuState"></app-list-switch>
    </div>

    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-hide" :active="value.hide" @click="updateMenuHide"></app-list-switch>
    </div>

    <div class="th-table-td-m uk-text-center">
        <span>{{ value.id }}</span>
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
            this.collapsed.toggle(this.value.id); this.$forceUpdate();
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
            if ( input != null ) this.value.route = input || '/';
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

if (window.Liro) {
    Liro.vue.component('liro-menu-index-item', this.default);
}


</script>

