<template>
    <app-helper-history v-model="UserModel">
        <div slot-scope="{ item, canUndo, canRedo, undo, redo, reset }">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button :disabled="true" uk-toggle="target: #app-module-help">
                    {{ $t('liro-users.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

            <!-- Toolbar start -->
            <portal to="app-toolbar-left">
                <app-toolbar-button icon="check" @click.prevent="edit()">
                    {{ $t('liro-users.toolbar.save') }}
                </app-toolbar-button>
                <app-toolbar-button icon="close" :href="indexRoute">
                    {{ $t('liro-users.toolbar.close') }}
                </app-toolbar-button>
                <app-toolbar-spacer>
                    <!-- Spacer -->
                </app-toolbar-spacer>
                <app-toolbar-button @click.prevent="undo()" :disabled="!canUndo">
                    {{ $t('liro-users.toolbar.undo') }}
                </app-toolbar-button>
                <app-toolbar-button @click.prevent="redo()" :disabled="!canRedo">
                    {{ $t('liro-users.toolbar.redo') }}
                </app-toolbar-button>
            </portal>
            <portal to="app-toolbar-right">
                <app-toolbar-button @click.prevent="reset()" :disabled="!canUndo">
                    {{ $t('liro-users.toolbar.discard') }}
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
                <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-users.backend.users.edit') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Form start -->
            <div class="uk-form uk-form-stacked">
                <fieldset class="uk-fieldset">

                    <app-form-input 
                        name="name" rules="required|min:4" v-model="item.name"
                        :label="$t('liro-users.form.name')"
                    ></app-form-input>

                    <app-form-select 
                        name="state" v-model="item.state" :options="states"
                        :label="$t('liro-users.form.state')" :placeholder="$t('liro-users.placeholder.state')"
                    ></app-form-select>

                    <app-form-select-multiple 
                        name="role_ids" v-model="item.role_ids" :options="roles" option-label="title" option-value="id"
                        :label="$t('liro-users.form.roles')" :placeholder="$t('liro-users.placeholder.roles')"
                    ></app-form-select-multiple>

                    <app-form-input 
                        user="email" name="email" rules="required|email" v-model="item.email"
                        :label="$t('liro-users.form.email')"
                    ></app-form-input>
                    
                    <app-form-password 
                        name="password" rules="min:6" v-model="item.password"
                        :label="$t('liro-users.form.password')" :generate="$t('liro-users.form.generate')"
                    ></app-form-password>

                </fieldset>
            </div>
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

        user: {
            default() {
                return this.$liro.data.get('user', {});
            },
            type: Object
        },

        roles: {
            default() {
                return this.$liro.data.get('roles', []);
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
        }

    },

    data() {
        
        return {
            UserModel: this.user
        };
        
    },

    methods: {

        edit() {
            this.$http.post(this.UserModel.edit_route, this.UserModel);
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-users-edit', this.default);
}

</script>

