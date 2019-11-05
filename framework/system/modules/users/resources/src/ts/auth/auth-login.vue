<template>
    <div class="liro-users-auth-login">
        <NForm class="login__form" label-position="top" :model="user">

            <NFormItem prop="email" :label="trans('liro-users::form.auth.email')" :error="error.email">
                <NInput v-model="user.email"></NInput>
            </NFormItem>

            <NFormItem prop="password" :label="trans('liro-users::form.auth.password')" :error="error.password">
                <NInput native-type="password" v-model="user.password"></NInput>
            </NFormItem>

            <NFormItem>
                <div class="grid grid--row grid--middle">
                    <div class="col col--left">
                        <NCheckbox v-model="user.remember">
                            {{ trans('liro-users::form.auth.remember_me') }}
                        </NCheckbox>
                    </div>
                    <div class="col col--right">
                        <router-link to="/reset-password">
                            {{ trans('liro-users::form.auth.password_forget') }}
                        </router-link>
                    </div>
                </div>

            </NFormItem>

            <NFormItem>
                <NButton class="login__submit" type="primary" @click="authUser">
                    {{ trans('liro-users::form.auth.login') }}
                </NButton>
            </NFormItem>

        </NForm>
    </div>
</template>
<script>


    let user = {
        email: '', password: '', remember: false
    };

    let errors = {
        email: null, password: null
    };

    export default {

        data () {
            return {
                load: false, user: user, error: errors
            }
        },

        methods: {

            authUser () {
                this.Ajax.call(['auth-login', 'auth'], true, this.user)
                    .then(this.authUserDone, this.authUserError);
            },

            authUserDone (res) {
                this.$router.push({ path: '/' });
            },

            authUserError (res) {
                this.error = this.Obj.assign({}, errors, res.data.errors);
            }

        }

    }

</script>
