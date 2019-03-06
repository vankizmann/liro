<template>

<div class="liro-menu-create uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" href="javascript:window.history.back()">
                {{ trans('theme::form.toolbar.close') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="storeMenu" v-shortkey="['meta', 's']" @shortkey="storeMenu">
                {{ trans('theme::form.toolbar.save') }}
            </a>

        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-large">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-menus::form.legend.general') }}</span>
            </legend>

            <app-label :label="trans('liro-menus::form.menu.state')">
                <app-switch class="is-state" v-model="menu.state">
                    <app-switch-option v-for="item in states" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.hide')">
                <app-switch class="is-hide" v-model="menu.hide">
                    <app-switch-option v-for="item in hides" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.default')">
                <app-switch class="is-default" v-model="menu.default">
                    <app-switch-option v-for="item in defaults" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.type')">
                <app-select v-model="menu.menu_type_id" :placeholder="trans('liro-menus::form.menu.select_type')">
                    <app-select-option v-for="type in types" :key="type.id" :value="type.id" :label="type.title"></app-select-option>
                </app-select>
            </app-label>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-menus::form.legend.info') }}</span>
            </legend>

            <app-label :label="trans('liro-menus::form.menu.title')" :required="true">
                <app-input v-model="menu.title"></app-input>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.route')" :required="true">
                <app-input v-model="menu.route"></app-input>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.module')" :required="true">
                <app-select v-model="menu.module" :placeholder="trans('liro-menus::form.menu.select_module')" :disabled="menu.lock">
                    <template v-for="(items, group) in modules">
                        <app-select-group v-show="group == 'user'" v-for="(routes, index) in items" :key="group + '-' + index" :label="index">
                            <app-select-option v-for="(label, value) in routes" :key="value" :value="value" :label="label"></app-select-option>
                        </app-select-group>
                    </template>
                </app-select>
            </app-label>

            <app-label :label="trans('liro-menus::form.menu.query')">
                <app-input v-model="menu.query"></app-input>
            </app-label>

        </div>
    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    computed: {

        states: function () {
            return this.$root.states;
        },

        hides: function () {
            return this.$root.hides;
        },

        defaults: function () {
            return this.$root.defaults;
        },

        types: function () {
            return this.$root.types;
        },

        modules: function () {
            return this.$root.modules;
        },

        menu: function () {
            return this.$root.menu;
        }

    },

    methods: {

        storeMenu: function () {
            var url = Liro.routes.get('liro-menus.ajax.menu.store');
            Axios.post(url, this.menu).then(this.storeMenuResponse);
        },

        storeMenuResponse: function (res) {

            var values = {
                menu: res.data.id
            };

            var query = {
                success: 'liro-menus::message.menu.created'
            };

            Liro.routes.redirect('liro-menus.menu.edit', values, query);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-menu-create', this.default);
}

</script>

