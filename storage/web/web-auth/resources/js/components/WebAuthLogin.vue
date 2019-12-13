<template>
    <div class="web-auth__login">
        <NForm @submit.prevent="loginAction">

            <NFormItem :label="trans('E-Mail-Address')">
                <NInput native-type="text" v-model="form.email" :placeholder="trans('Please enter your email')" />
            </NFormItem>

            <NFormItem :label="trans('Password')">
                <NInput native-type="password" v-model="form.password" :placeholder="trans('Please enter your password')" />
            </NFormItem>

            <NFormItem>
                <NButton type="primary" native-type="submit">{{ trans('Sign in') }}</NButton>
            </NFormItem>

        </NForm>
    </div>
</template>
<script>
    export default {

        name: 'WebAuthLogin',

        data()
        {
            let form = {
                email: '', password: ''
            };

            return { form };
        },

        methods: {

            loginAction()
            {
                this.$http.post('module.web-auth.auth.login', this.form).then((res) => {
                    console.log('User logged in: ' + res.data.name);
                });
            }

        }

    }
</script>
