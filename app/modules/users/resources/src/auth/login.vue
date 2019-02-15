<template>

    <div class="liro-auth-login" v-loading="load">
        <el-form class="liro-auth-login__form" label-position="top" :model="user">

            <el-form-item prop="email" :label="trans('liro-users::form.auth.email')">
                <el-input v-model="user.email"></el-input>
            </el-form-item>

            <el-form-item prop="password" :label="trans('liro-users::form.auth.password')">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-checkbox v-model="user.remember">
                    {{ trans('liro-users::form.auth.remember_me') }}
                </el-checkbox>
            </el-form-item>

            <el-form-item>
                <el-button class="liro-auth-login__button" type="primary" @click="authUser">
                    {{ trans('liro-users::form.auth.login') }}
                </el-button>
            </el-form-item>

        </el-form>
    </div>

</template>
<script>

    window.Liro.Modules.export('liro-auth-login', this.default = {

        data: function () {
            return {
                load: false,
                user: { email: '', password: '', remember: false }
            }
        },

        mounted: function () {
            this.events.bind('axios:load', (data) => {
                if ( data._uid === this._uid ) this.load = true;
            });
        },

        methods: {

            authUser: function () {

                let url = this.routes.get('liro-users.ajax.auth.login');

                this.http.post(url, this.user, { _uid: this._uid })
                    .then(this.authUserResponse, this.authUserError);
            },

            authUserResponse: function (res) {
                this.routes.goto(res.data.redirect, null, null);
            },

            authUserError: function () {
                this.load = false;
            }

        }

    });

</script>

