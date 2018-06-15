<template>
    <app-helper-history v-model="MenuModel">
        <div class="uk-form uk-form-stacked" slot-scope="{ item, canUndo, canRedo, undo, redo, reset }">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button uk-toggle="target: #app-module-help">
                    {{ $t('liro-menus.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

            <!-- Toolbar start -->
            <portal to="app-toolbar-left">
                <app-toolbar-button icon="check" @click.prevent="create()">
                    {{ $t('liro-menus.toolbar.create') }}
                </app-toolbar-button>
                <app-toolbar-button icon="close" :href="indexRoute">
                    {{ $t('liro-menus.toolbar.close') }}
                </app-toolbar-button>
                <app-toolbar-spacer>
                    <!-- Spacer -->
                </app-toolbar-spacer>
                <app-toolbar-button @click.prevent="undo()" :disabled="!canUndo">
                    {{ $t('liro-menus.toolbar.undo') }}
                </app-toolbar-button>
                <app-toolbar-button @click.prevent="redo()" :disabled="!canRedo">
                    {{ $t('liro-menus.toolbar.redo') }}
                </app-toolbar-button>
            </portal>
            <portal to="app-toolbar-right">
                <app-toolbar-button @click.prevent="reset()" :disabled="!canUndo">
                    {{ $t('liro-menus.toolbar.discard') }}
                </app-toolbar-button>
            </portal>
            <!-- Toolbar end -->

            <!-- Help start -->
            <portal to="app-module-help">
                <h1>Help</h1>
            </portal>
            <!-- Help end -->

            <!-- Title start -->
            <div class="uk-margin-large">
                <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-menus.backend.menus.create') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Form start -->
            <fieldset class="uk-fieldset">

                <app-form-input 
                    name="title" v-model="item.title" rules="required|min:4" 
                    :label="$t('liro-menus.form.title')" 
                ></app-form-input>

                <app-form-select 
                    name="state" v-model="item.state" :options="states" 
                    :label="$t('liro-menus.form.state')" :placeholder="$t('liro-menus.placeholder.state')"
                ></app-form-select>

                <app-form-select 
                    name="hidden" v-model="item.hidden" :options="visibility"
                    :label="$t('liro-menus.form.visibility')" :placeholder="$t('liro-menus.placeholder.visibility')"
                ></app-form-select>

                <app-form-select 
                    name="menu_type_id" v-model="item.menu_type_id" :options="types" option-label="title" option-value="id" 
                    :label="$t('liro-menus.form.type')" :placeholder="$t('liro-menus.placeholder.type')"
                ></app-form-select>
                
                <app-form-input
                    name="route" v-model="item.route" 
                    :label="$t('liro-menus.form.route')"
                ></app-form-input>

                <app-form-select 
                    name="module" v-model="item.module" :options="modules"
                    :label="$t('liro-menus.form.module')" :placeholder="$t('liro-menus.placeholder.module')"
                ></app-form-select>

                <app-form-input
                    name="query" v-model="item.query" 
                    :label="$t('liro-menus.form.query')"
                ></app-form-input>

            </fieldset>
            <!-- Form end -->

        </div>
    </app-helper-history>
</template>
<script>
export default {

    props: {

        indexRoute: {
            default() {
                return '';
            },
            type: String
        },

        createRoute: {
            default() {
                return '';
            },
            type: String
        },

        menu: {
            default() {
                return this.$liro.data.get('menu', {});
            },
            type: Object
        },

        modules: {
            default() {
                return this.$liro.data.get('modules', []);
            },
            type: [Array, Object]
        },

        types: {
            default() {
                return this.$liro.data.get('types', []);
            },
            type: [Array, Object]
        },

        states: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' },
                    { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }
                ];
            },
            type: Array
        },

        visibility: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.hidden'), css: 'uk-danger' },
                    { value: 0, label: this.$t('liro-users.form.visible'), css: 'uk-success' }
                ];
            },
            type: Array
        }

    },

    data() {
        
        return {
            MenuModel: this.menu
        };
        
    },

    methods: {

        create() {
            this.$http.post(this.item.edit_route, this.MenuModel);
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-menus-create', this.default);
}
</script>

