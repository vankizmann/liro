<template>

    <div class="liro-tree-modal uk-modal-container" ref="modal" uk-modal="esc-close: false; container: false;">
        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <div class="uk-modal-header">
                <h2 class="uk-modal-title">{{ trans('liro-menus::admin.menu.create') }}</h2>
            </div>

            <div class="uk-modal-body">
                <div class="uk-flex" uk-grid>

                    <div class="uk-width-2-3">
                        <!-- Form start -->
                        <legend class="uk-legend uk-legend-small">
                            <span>{{ trans('liro-menus::form.legend.info') }}</span>
                        </legend>

                        <app-label :label="trans('liro-menus::form.menu.title')" :required="true">
                            <app-input v-model="ghost.title"></app-input>
                        </app-label>

                        <app-label :label="trans('liro-menus::form.menu.route')" :required="true">
                            <app-input v-model="ghost.route"></app-input>
                        </app-label>

                        <app-label :label="trans('liro-menus::form.menu.module')" :required="true">
                            <app-select v-model="model.module" :placeholder="trans('liro-menus::form.menu.select_module')" :disabled="model.lock || false">
                                <template v-for="(items, group) in modules">
                                    <app-select-group v-show="group == 'user'" v-for="(routes, index) in items" :key="group + '-' + index" :label="index">
                                        <app-select-option v-for="(label, value) in routes" :key="value" :value="value" :label="label"></app-select-option>
                                    </app-select-group>
                                </template>
                            </app-select>
                        </app-label>

                        <app-label :label="trans('liro-menus::form.menu.query')">
                            <app-input v-model="ghost.query"></app-input>
                        </app-label>
                        <!-- Form end -->
                    </div>

                    <div class="uk-width-1-3">

                        <legend class="uk-legend uk-legend-small">
                            <span>{{ trans('liro-menus::form.legend.general') }}</span>
                        </legend>

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

                        <app-label :label="trans('liro-menus::form.menu.default')">
                            <app-switch class="is-default" v-model="model.default">
                                <app-switch-option v-for="item in defaults" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                            </app-switch>
                        </app-label>

                        <app-label :label="trans('liro-menus::form.menu.type')">
                            <app-select v-model="model.menu_type_id" :placeholder="trans('liro-menus::form.menu.select_type')">
                                <app-select-option v-for="type in types" :key="type.id" :value="type.id" :label="type.title"></app-select-option>
                            </app-select>
                        </app-label>

                    </div>

                </div>
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

