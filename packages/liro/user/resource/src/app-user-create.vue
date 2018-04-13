<template>
    <div class="uk-form uk-form-stacked">
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
            <button class="uk-button uk-button-primary" @click="$liro.trigger('user.undo');" :disabled="!canUndo">Undo</button>
            <button class="uk-button uk-button-primary" @click="$liro.trigger('user.redo');" :disabled="!canRedo">Redo</button>
        </fieldset>
    </div>
</template>
<script>
module.exports = {
    name: 'app-user-create',
    computed: {
        canUndo() {
            return this.history.canUndo;
        },
        canRedo() {
            return this.history.canRedo;
        }
    },
    props: {
        value: {
            type: Object
        }
    },
    data() {
        return {
            history: new Undo(this.value),
            user: this.value
        }
    },
    mounted() {

        this.$watch('user', _.debounce(this.save, 600), {
            deep: true
        });

        this.$liro.listen('user.undo', () => {
            this.user = this.history.undo();
        });

        this.$liro.listen('user.redo', () => {
            this.user = this.history.redo();
        });

        this.$liro.listen('user.store', () => {
            this.$http.post('/', this.user).then(this.$root.httpSuccess).catch(this.$root.httpError);
        });
    },
    methods: {
        save() {
            if ( this.history.preventer() ) {
                this.history.save(this.user);
            }
        }
    }
}
liro.component(module.exports);
</script>

