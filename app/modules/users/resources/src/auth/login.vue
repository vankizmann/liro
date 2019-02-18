<template>

    <div class="liro-auth-login" v-loading="load">
        <el-form class="liro-auth-login__form" label-position="top" :model="user" @submit.native.prevent="authUser">

            <el-form-item prop="email" :label="trans('liro-users::form.auth.email')" :error="error.email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>

            <el-form-item prop="password" :label="trans('liro-users::form.auth.password')" :error="error.password">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-checkbox v-model="user.remember">
                    {{ trans('liro-users::form.auth.remember_me') }}
                </el-checkbox>
            </el-form-item>

            <el-form-item>
                <el-button class="liro-auth-login__button" type="primary" native-type="submit">
                    {{ trans('liro-users::form.auth.login') }}
                </el-button>
            </el-form-item>

            <el-form-item>
                <ul class="list grid grid--row grid--center">
                    <li class="col--flex-none">
                        <a href="#">
                            {{ trans('liro-users::form.auth.password_forget') }}
                        </a>
                    </li>
                </ul>
            </el-form-item>

        </el-form>
    </div>

</template>
<script>

    let user = {
        email: '', password: '', remember: false
    };

    let errors = {
        email: null, password: null
    };

    window.liro.modules.export('liro-auth-login', this.default = {

        data: function () {
            return {
                load: false, user: user, error: errors
            }
        },

        methods: {

            authUser: function () {

                let url = this.routes.get('liro-users.ajax.auth.login');

                this.http.post(url, this.user)
                    .then(this.authUserResponse, this.authUserError);

                this.load = true;
            },

            authUserResponse: function (res) {
                this.routes.goto(res.data.redirect, null, null);
            },

            authUserError: function (res) {

                this.error = $.extend(
                    {}, errors, res.data.errors
                );

                this.load = false;
            }

        }

    });

</script>

