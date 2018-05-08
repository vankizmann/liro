<template>
    <div class="uk-form uk-form-stacked">

        <!-- Toolbar start -->
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-icon-success" icon="fa fa-check" event="role.create">
                {{ $t('users.form.create') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-times" :href="indexRoute">
                {{ $t('users.form.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="role.undo" :disabled="!canUndo">
                {{ $t('users.form.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="role.redo" :disabled="!canRedo">
                {{ $t('users.form.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-icon-danger" icon="fa fa-ban" event="role.reset" :disabled="!canUndo">
                {{ $t('users.form.discard') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('users.module.roles-help') }}
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
            <h1 class="uk-text-lead uk-margin-remove">{{ $t('users.module.roles-edit') }}</h1>
        </div>
        <!-- Title end -->

        <!-- Form start -->
        <fieldset class="uk-fieldset">
            <app-form-input
                :label="$t('users.form.title')" type="text" id="title" name="title" 
                rules="required|min:4" v-model="item.title"
            ></app-form-input>
            <app-form-input
                :label="$t('users.form.description')" type="description" id="description" name="description" v-model="item.description"
            ></app-form-input>
            <div class="uk-child-width-1-2">
                <label v-for="route in routes" :key="route.id" class="uk-display-inline-block" style="margin-bottom: 3px;">
                    <input type="checkbox" class="uk-checkbox" style="margin-right: 4px;" :value="route" v-model="item.route_names"> <span>{{ route }}</span>
                </label>
            </div>
        </fieldset>
        <!-- Form end -->

    </div>
</template>
<script>
module.exports = {

    name: 'app-roles-edit',

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
            item: this.role
        }
    },

    mounted() {

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.save, 600), {
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
            this.$http.post(this.createRoute, this.item).then(this.$root.httpSuccess).catch(this.$root.httpError);
        });
    },

    methods: {
        save() {
            if ( this.$store.state.history.preventer() ) {
                this.$store.commit('history/save', this.item);
            }
        }
    }

}
liro.component(module.exports);
</script>

