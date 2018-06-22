<template>
    <app-helper-history :value="TypeModel">
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
                <app-toolbar-button icon="check" @click.prevent="edit()">
                    {{ $t('liro-menus.toolbar.save') }}
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
                <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-menus.backend.types.edit') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Form start -->
            <fieldset class="uk-fieldset">

                <app-form-input
                    name="title" v-model="item.title" rules="required|min:4"
                    :label="$t('liro-menus.form.title')" 
                ></app-form-input>
                
                <app-form-input
                    name="route" v-model="item.route"
                    :label="$t('liro-menus.form.route')"
                ></app-form-input>

                <app-form-select
                    name="theme" v-model="item.theme" :options="themes" option-label="name" option-value="name"
                    :label="$t('liro-menus.form.theme')" :placeholder="$t('liro-menus.placeholder.themes')"
                ></app-form-select>

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

        type: {
            default() {
                return this.$liro.data.get('type', {});
            },
            type: Object
        },

        themes: {
            default() {
                return this.$liro.data.get('themes', []);
            },
            type: [Array, Object]
        }

    },

    data() {
        
        return {
            TypeModel: this.type
        };
        
    },

    methods: {

        edit() {
            this.$http.post(this.TypeModel.edit_route, this.TypeModel);
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-types-edit', this.default);
}

</script>

