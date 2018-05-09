<template>
    <div class="uk-form uk-form-stacked">

        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-icon-success" icon="fa fa-check" event="user.create" :disabled="disabled">
                {{ $t('liro-users.toolbar.create') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-times" :href="indexRoute" :disabled="disabled">
                {{ $t('liro-users.toolbar.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="user.undo" :disabled="!canUndo">
                {{ $t('liro-users.toolbar.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="user.redo" :disabled="!canRedo">
                {{ $t('liro-users.toolbar.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-icon-danger" icon="fa fa-ban" event="user.reset" :disabled="!canUndo">
                {{ $t('liro-users.toolbar.discard') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('liro-users.toolbar.help') }}
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
            <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-users.backend.users.create') }}</h1>
        </div>
        <!-- Title end -->

        <!-- Form start -->
        <fieldset class="uk-fieldset">

            <app-form-input 
                :label="$t('liro-users.form.name')" type="text" id="name" name="name" 
                rules="required|min:4" v-model="item.name"
            ></app-form-input>

            <app-form-select 
                :label="$t('liro-users.form.state')" id="state" name="state" :options="states" 
                :placeholder="$t('liro-users.placeholder.state')" v-model="item.state"
            ></app-form-select>

            <app-form-select-multiple 
                :label="$t('liro-users.form.roles')" id="role_ids" name="role_ids" 
                :options="roles" option-label="title" option-value="id"
                :placeholder="$t('liro-users.placeholder.roles')" v-model="item.role_ids"
            ></app-form-select-multiple>

            <app-form-input 
                :label="$t('liro-users.form.email')" type="email" id="email" name="email" 
                rules="required|email" v-model="item.email"
            ></app-form-input>
            
            <app-form-password 
                :label="$t('liro-users.form.password')" id="password" name="password" 
                rules="min:6" :generate="$t('liro-users.form.generate')" v-model="item.password"
            >
            </app-form-password>

        </fieldset>
        <!-- Form end -->

    </div>
</template>
<script>
module.exports = {

    name: 'app-users-create',

    computed: {
        canUndo() {
            return this.$store.getters['history/canUndo'];
        },
        canRedo() {
            return this.$store.getters['history/canRedo'];
        }
    },

    props: {
        createRoute: {
            default: '',
            type: String
        },
        indexRoute: {
            default: '',
            type: String
        },
        roles: {
            default() {
                return [];
            },
            type: Array
        },
        user: {
            default() {
                return {};
            },
            type: Object
        },
        states: {
            default() {
                return [
                    { value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' },
                    { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }
                ]
            },
            type: Array
        }
    },

    data() {
        return {
            disabled: false,
            item: this.user
        }
    },

    mounted() {

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('user.undo', () => {
            this.item = this.$store.state.history.undo();
        });

        this.$liro.listen('user.redo', () => {
            this.item = this.$store.state.history.redo();
        });

        this.$liro.listen('user.reset', () => {
            this.item = this.$store.state.history.reset();
        });

        this.$liro.listen('user.create', () => {
            this.$http.post(this.createRoute, this.item);
        });

        this.$liro.listen('ajax.load', () => {
            this.disabled = true;
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