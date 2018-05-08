<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-event class="uk-icon-success" icon="fa fa-check" event="user.create">
                {{ $t('theme.create') }}
            </app-toolbar-event>
            <app-toolbar-link class="uk-icon-danger" icon="fa fa-times" :href="baseRoute">
                {{ $t('theme.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="user.undo" :disabled="!canUndo">
                {{ $t('theme.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="user.redo" :disabled="!canRedo">
                {{ $t('theme.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event class="uk-icon-danger" icon="fa fa-ban" event="user.reset" :disabled="!canUndo">
                {{ $t('theme.discard') }}
            </app-toolbar-event>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('theme.help') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-module-help">
            <h1>Help</h1>
        </portal>
        <fieldset class="uk-fieldset">
            <app-form-input
                :label="$t('user.form.name')" type="text" id="name" name="name" 
                rules="required|min:4" v-model="user.name"
            ></app-form-input>
            <app-form-input
                :label="$t('user.form.email')" type="email" id="email" name="email" 
                rules="required|email" v-model="user.email"
            ></app-form-input>
            <app-form-password
                :label="$t('user.form.password')" :generate="$t('user.form.generate')" 
                type="text" id="password" name="password" rules="required|min:6" v-model="user.password"
            >
            </app-form-password>
        </fieldset>
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
        baseRoute: {
            type: String
        },
        createRoute: {
            type: String
        },
        value: {
            type: Object
        }
    },
    data() {
        return {
            user: this.value
        }
    },
    mounted() {

        this.$store.commit('history/init', this.user);

        this.$watch('user', _.debounce(this.save, 600), {
            deep: true
        });

        this.$liro.listen('user.undo', () => {
            this.user = this.$store.state.history.undo();
        });

        this.$liro.listen('user.redo', () => {
            this.user = this.$store.state.history.redo();
        });

        this.$liro.listen('user.reset', () => {
            this.user = this.$store.state.history.reset();
        });

        this.$liro.listen('user.create', () => {
            this.$http.post(this.createRoute, this.user).then(this.$root.httpSuccess).catch(this.$root.httpError);
        });
    },
    methods: {
        save() {
            if ( this.$store.state.history.preventer() ) {
                this.$store.commit('history/save', this.user);
            }
        }
    }
}
liro.component(module.exports);
</script>

