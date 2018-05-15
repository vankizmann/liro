<template>
    <div class="uk-form uk-form-stacked">

        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-icon-success" icon="fa fa-check" event="menu.save" :disabled="disabled">
                {{ $t('liro-menus.toolbar.save') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-times" :href="indexRoute" :disabled="disabled">
                {{ $t('liro-menus.toolbar.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="menu.undo" :disabled="!canUndo">
                {{ $t('liro-menus.toolbar.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="menu.redo" :disabled="!canRedo">
                {{ $t('liro-menus.toolbar.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-icon-danger" icon="fa fa-ban" event="menu.reset" :disabled="!canUndo">
                {{ $t('liro-menus.toolbar.discard') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-minus-circle" :href="item.delete_route">
                {{ $t('liro-menus.toolbar.delete') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('liro-menus.toolbar.help') }}
            </app-toolbar-link>
        </portal>
        <!-- Toolbar end -->

        <!-- Help start -->
        <portal to="app-module-help">
            <h1>Help</h1>
        </portal>
        <!-- Help end -->

        <!-- Title start -->
        <div class="uk-margin-bottom">
            <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-menus.backend.menus.create') }}</h1>
        </div>
        <!-- Title end -->

        <!-- Form start -->
        <fieldset class="uk-fieldset">

            <app-form-input
                :label="$t('liro-menus.form.title')" type="text" id="title" name="title" 
                rules="required|min:4" v-model="item.title"
            ></app-form-input>

            <app-form-select 
                :label="$t('liro-users.form.state')" id="state" name="state" :options="states" 
                :placeholder="$t('liro-users.placeholder.state')" v-model="item.state"
            ></app-form-select>

            <app-form-select 
                :label="$t('liro-users.form.hidden')" id="hidden" name="hidden" :options="hiddens" 
                :placeholder="$t('liro-users.placeholder.state')" v-model="item.hidden"
            ></app-form-select>

            <app-form-select
                :label="$t('liro-users.form.type')" id="menu_type_id" name="menu_type_id" 
                :options="types" option-label="title" option-value="id"
                :placeholder="$t('liro-users.placeholder.state')" v-model="item.menu_type_id"
            ></app-form-select>
            
            <app-form-input
                :label="$t('liro-menus.form.route')" type="route" id="route" 
                name="route" v-model="item.route"
            ></app-form-input>

            <app-form-select 
                :label="$t('liro-users.form.package')" id="module" name="module" :options="routes" 
                :placeholder="$t('liro-users.placeholder.module')" v-model="item.package"
            ></app-form-select>

        </fieldset>
        <!-- Form end -->

    </div>
</template>
<script>
module.exports = {

    name: 'app-menus-edit',

    computed: {
        canUndo() {
            return this.$store.getters['history/canUndo'];
        },
        canRedo() {
            return this.$store.getters['history/canRedo'];
        }
    },

    props: {
        indexRoute: {
            default: '',
            type: String
        },
        menu: {
            default() {
                return {};
            },
            type: Object
        },
        types: {
            default() {
                return [];
            },
            type: Array
        },
        routes: {
            default() {
                return [];
            },
            type: Array
        },
        states: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' },
                    { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }
                ]
            },
            type: Array
        },
        hiddens: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.hidden'), css: 'uk-danger' },
                    { value: 0, label: this.$t('liro-users.form.visible'), css: 'uk-success' }
                ]
            },
            type: Array
        }
    },

    data() {
        return {
            disabled: false,
            item: this.menu
        }
    },

    mounted() {

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('menu.undo', () => {
            this.item = this.$store.state.history.undo();
        });

        this.$liro.listen('menu.redo', () => {
            this.item = this.$store.state.history.redo();
        });

        this.$liro.listen('menu.reset', () => {
            this.item = this.$store.state.history.reset();
        });

        this.$liro.listen('menu.save', () => {
            this.$http.post(this.item.edit_route, this.item);
        });

        this.$liro.listen('ajax.load', () => {
            this.disabled = true;
        });

        this.$liro.listen('ajax.done', () => {
            this.disabled = false;
        });

        this.$liro.listen('ajax.error', () => {
            this.disabled = false;
        });

    },

    methods: {
        create() {
            if ( this.$store.state.history.preventer() ) {
                this.$store.commit('history/save', this.item);
            }
        }
    }

}
liro.component(module.exports);
</script>

