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
                type="text" id="password" name="password" rules="min:6" v-model="user.password"
            >
            </app-form-password>
        </fieldset>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-user-edit',
        props: {
            update: {
                default: '',
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
            // this.$root.$on('user.update', (event) => {
            //     event.preventDefault();
            //     this.$http.post(this.update, this.user).then(this.$root.httpSuccess).catch(this.$root.httpError);
            // });
        }
    }
    liro.component(module.exports);
</script>

