<template>
    <NLoader :visible="load" class="app-login">

        <NForm class="app-login__form" label-position="left" :model="user" :errors="errors">

            <NFormItem prop="email" :label="trans('liro-users::form.auth.email')">
                <NInput v-model="user.email" />
            </NFormItem>

            <NFormItem prop="password" :label="trans('liro-users::form.auth.password')">
                <NInput native-type="password" v-model="user.password" />
            </NFormItem>

            <NFormItem>
                <NCheckbox v-model="user.remember">
                    {{ trans('liro-users::form.auth.remember_me') }}
                </NCheckbox>
            </NFormItem>

            <NFormItem>
                <div class="grid grid--row grid--middle">
                    <div class="col col--left">
                        <router-link to="/reset-password">
                            {{ trans('liro-users::form.auth.password_forget') }}
                        </router-link>
                    </div>
                    <div class="col col--right">
                        <NButton class="login__submit" type="primary" @click="authUser" round>
                            {{ trans('liro-users::form.auth.login') }}
                        </NButton>
                    </div>
                </div>
            </NFormItem>

        </NForm>

    </NLoader>
</template>
<script>

    export default {

        name: 'app-login',

        data ()
        {
            let user = {
                email: '', password: '', remember: false
            };

            return {
                load: false, user: user, errors: {}
            }
        },

        methods: {

            authUser()
            {
                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.Ajax.call(['auth-login', 'auth'], true, this.user, options)
                    .then(this.authUserDone, this.authUserError);
            },

            authUserDone(res)
            {
                this.$router.push({ path: '/' });
            },

            authUserError(res)
            {
                console.log(res);
                this.errors = this.Obj.get(res, 'data.errors', {});
            }

        }

    }

</script>
