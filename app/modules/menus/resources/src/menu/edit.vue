<template>

<div class="liro-menu-edit">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <!-- Close link -->
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-menus.menu.index', { type: menu.menu_type_id })">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <!-- Close link end -->

            <!-- Save button -->
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateMenu" v-shortkey="['meta', 's']" @shortkey="updateMenu">
                {{ Liro.messages.get('theme::form.toolbar.save') }}
            </a>
            <!-- Save button end -->

        </div>
    </portal>

    <!-- Form start -->
    <div class="th-form">

        <app-form-select 
            name="state" v-model="menu.state" :options="states" :label="Liro.messages.get('liro-menus::form.menu.state')" :placeholder="Liro.messages.get('liro-menus::form.menu.select_state')"
        ></app-form-select>

        <app-form-select 
            name="hide" v-model="menu.hide" :options="hides" :label="Liro.messages.get('liro-menus::form.menu.hide')" :placeholder="Liro.messages.get('liro-menus::form.menu.select_hide')"
        ></app-form-select>

        <app-form-select 
            name="menu_type_id" v-model="menu.menu_type_id" :options="types" options-value="id" options-label="title" :label="Liro.messages.get('liro-menus::form.menu.type')" :placeholder="Liro.messages.get('liro-menus::form.menu.select_type')"
        ></app-form-select>

        <app-form-input 
            name="title" v-model="menu.title" :label="Liro.messages.get('liro-menus::form.menu.title')"
        ></app-form-input>

        <app-form-input 
            name="route" v-model="menu.route" :label="Liro.messages.get('liro-menus::form.menu.route')"
        ></app-form-input>

        <app-form-select 
            name="module" v-model="menu.module" :options="modules" :label="Liro.messages.get('liro-menus::form.menu.module')" :placeholder="Liro.messages.get('liro-menus::form.menu.select_module')"
        ></app-form-select>

        <app-form-input 
            name="query" v-model="menu.query" :label="Liro.messages.get('liro-menus::form.menu.query')"
        ></app-form-input>

    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    /**
     * Get data from liro framework
     */
    data: function () {
        return {
            states: this.Liro.data.get('states'),
            hides: this.Liro.data.get('hides'),
            types: this.Liro.data.get('types'),
            modules: this.Liro.data.get('modules'),
            menu: this.Liro.data.get('menu')
        };
    },

    methods: {

        /**
         * Submit ajax request to save menu
         */
        updateMenu: function () {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.menu.id
            });

            Axios.post(url, this.menu).then(this.updateMenuResponse);
        },

        /**
         * Show success message
         */
        updateMenuResponse: function (res) {
            var message = Liro.messages.get('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-menu-edit', this.default);
}

</script>

