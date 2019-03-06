<template>

    <div class="liro-tree-modal" ref="modal" uk-modal="esc-close: false; container: false;">
        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <div class="uk-modal-header">
                <h2 class="uk-modal-title">{{ model.title_trans || trans('liro-menus::admin.menu.edit') }}</h2>
            </div>

            <div class="uk-modal-body">

                <app-label :label="trans('liro-menus::form.menu.state')">
                    <app-switch class="is-state" v-model="model.state">
                        <app-switch-option v-for="item in states" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                    </app-switch>
                </app-label>

                <app-label :label="trans('liro-menus::form.menu.hide')">
                    <app-switch class="is-hide" v-model="model.hide">
                        <app-switch-option v-for="item in hides" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                    </app-switch>
                </app-label>

            </div>

            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                <button class="uk-button uk-button-primary" type="button">Save</button>
            </div>

        </div>
    </div>

</template>
<script>

    export default {

        model: {
            prop: 'model',
            event: 'input'
        },

        computed: {

            ghost: {
                get: function () {
                    return this.model;
                },
                set: function (value) {
                    this.$emit('input', value);
                }
            },

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

        props: {

            model: {
                required: true
            },

        },

        mounted: function () {
            this.$on('open', () => UIkit.modal(this.$refs.modal).show());
        },

        methods: {

            updateMenu: function () {

                var url = this.route('liro-menus.ajax.menu.update', {
                    menu: this.menu.id
                });

                this.http.put(url, this.menu).then(this.updateMenuResponse);
            },

            updateMenuResponse: function (res) {
                var message = this.trans('liro-menus::message.menu.saved');
                UIkit.notification(message, 'success');
            }

        }

    }

</script>

