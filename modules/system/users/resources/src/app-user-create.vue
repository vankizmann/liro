<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-event icon="fa fa-check" event="user.create">
                {{ $t('cms.create') }}
            </app-toolbar-event>
            <app-toolbar-link icon="fa fa-times" :href="baseRoute">
                {{ $t('cms.close') }}
            </app-toolbar-link>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-event icon="fa fa-undo" event="user.undo" :disabled="!canUndo">
                {{ $t('cms.undo') }}
            </app-toolbar-event>
            <app-toolbar-event icon="fa fa-redo" event="user.redo" :disabled="!canRedo">
                {{ $t('cms.redo') }}
            </app-toolbar-event>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-event icon="fa fa-ban" event="user.reset" :disabled="!canUndo">
                {{ $t('cms.discard') }}
            </app-toolbar-event>
        </portal>
        <fieldset class="uk-fieldset">
            <app-form-input
                :label="$t('user.label.name')" type="text" id="name" name="name" 
                rules="required|min:4" v-model="user.name"
            ></app-form-input>
            <app-form-input
                :label="$t('user.label.email')" type="email" id="email" name="email" 
                rules="required|email" v-model="user.email"
            ></app-form-input>
            <app-form-password
                :label="$t('user.label.password')" :generate="$t('user.form.generate')" 
                type="text" id="password" name="password" rules="required|min:6" v-model="user.password"
            >
            </app-form-password>
        </fieldset>
    </div>
</template>
<script>
module.exports = {
    name: 'app-user-create',
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

