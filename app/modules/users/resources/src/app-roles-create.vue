<template>
    <div class="uk-form uk-form-stacked">

        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-icon-success" icon="fa fa-check" event="role.create" :disabled="disabled">
                {{ $t('liro-users.toolbar.create') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-times" :href="indexRoute">
                {{ $t('liro-users.toolbar.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="role.undo" :disabled="!canUndo">
                {{ $t('liro-users.toolbar.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="role.redo" :disabled="!canRedo">
                {{ $t('liro-users.toolbar.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-icon-danger" icon="fa fa-ban" event="role.reset" :disabled="!canUndo">
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
            <h1 class="uk-text-lead uk-margin-remove">{{ $t('liro-users.backend.roles.create') }}</h1>
        </div>
        <!-- Title end -->

        <!-- Form start -->
        <fieldset class="uk-fieldset">

            <app-form-input
                :label="$t('liro-users.form.title')" type="text" id="title" name="title" 
                rules="required|min:4" v-model="item.title"
            ></app-form-input>

            <app-form-input
                :label="$t('liro-users.form.access')" type="text" id="access" name="access" 
                rules="required|alpha|min:4" v-model="item.access"
            ></app-form-input>
            
            <app-form-input
                :label="$t('liro-users.form.description')" type="description" id="description" 
                name="description" v-model="item.description"
            ></app-form-input>

            <div v-for="(group, index) in $liro.func.group(routes)" :key="index" class="uk-margin uk-padding uk-background-muted">
                <div class="uk-width-1-1">
                    <h4>{{ $t(index + '.group') }}</h4>
                </div>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l">
                    <label v-for="route in group" :key="route.id" class="uk-display-inline-block uk-margin-small">
                        <input type="checkbox" class="uk-checkbox" style="margin-right: 4px;" :value="route" v-model="item.route_names"> <span>{{ $t(route) }}</span>
                    </label>
                </div>
            </div>

        </fieldset>
        <!-- Form end -->

    </div>
</template>
<script>
module.exports = {

    name: 'app-roles-create',

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
        routes: {
            default() {
                return [];
            },
            type: Array
        },
        role: {
            default() {
                return {};
            },
            type: Object
        }
    },

    data() {
        return {
            disabled: false,
            item: this.role
        }
    },

    mounted() {

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('role.undo', () => {
            this.item = this.$store.state.history.undo();
        });

        this.$liro.listen('role.redo', () => {
            this.item = this.$store.state.history.redo();
        });

        this.$liro.listen('role.reset', () => {
            this.item = this.$store.state.history.reset();
        });

        this.$liro.listen('role.create', () => {
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

