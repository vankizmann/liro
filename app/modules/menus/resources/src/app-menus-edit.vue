<template>
    <div class="uk-form uk-form-stacked uk-padding">

        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-success" icon="check" event="menu.save">
                {{ $t('liro-menus.toolbar.save') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-danger" icon="close" :href="indexRoute">
                {{ $t('liro-menus.toolbar.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event event="menu.undo" :disabled="!canUndo">
                {{ $t('liro-menus.toolbar.undo') }}
            </app-toolbar-event>
            <app-toolbar-event event="menu.redo" :disabled="!canRedo">
                {{ $t('liro-menus.toolbar.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-danger" event="menu.reset" :disabled="!canUndo">
                {{ $t('liro-menus.toolbar.discard') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link class="uk-danger" icon="trash" :href="item.delete_route">
                {{ $t('liro-menus.toolbar.delete') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link class="uk-info" icon="info" href="#" uk-toggle="target: #app-module-help">
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

            <app-form-input
                :label="$t('liro-menus.form.query')" type="query" id="query" 
                name="query" v-model="item.query"
            ></app-form-input>

        </fieldset>
        <!-- Form end -->

    </div>
</template>
<script>
module.exports = {

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
        groups: {
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
            canUndo: false,
            canRedo: false,

            item: this.menu,
            value: this.$liro.data.$get('menu-type', {})
        }
    },

    created() {
        liro.vue.$history(this, 'item');
    },  

    mounted() {

        this.$liro.event.$watch('menu.undo', () => {
            this.item = this._history.undo();
        });

        this.$liro.event.$watch('menu.redo', () => {
            this.item = this._history.redo();
        });

        this.$liro.event.$watch('menu.reset', () => {
            this.item = this._history.reset();
        });

        this.$liro.event.$watch('menu.save', () => {
            this.$http.post(this.item.edit_route, this.item);
        });


    }

}
liro.vue.$component('app-menus-edit', module.exports);
</script>

