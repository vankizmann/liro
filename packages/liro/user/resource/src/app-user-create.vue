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
        </fieldset>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-user-create',
        data() {
            return {
                show_password: false,
                user: liro.data.user
            };
        },
        mounted() {
            this.$root.$on('user.store', (event) => {
                event.preventDefault();
                console.log(this.user);
            });
        }
    }
    liro.component(module.exports);
</script>

