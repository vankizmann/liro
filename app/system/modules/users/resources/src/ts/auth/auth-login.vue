<template>
    <div class="liro-users-auth-login">
        <el-form class="login__form" label-position="top" :model="user" @submit.native.prevent="authUser">

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
                <el-button class="login__button" type="primary" native-type="submit">
                    {{ trans('liro-users::form.auth.login') }}
                </el-button>
            </el-form-item>

            <el-form-item>
                <ul class="list">
                    <li>
                        <a href="#">
                            {{ trans('liro-users::form.auth.password_forget') }}
                        </a>
                    </li>
                </ul>
            </el-form-item>

        </el-form>
    </div>
</template>
<script lang="ts">

    declare var $ : any;

    let user : any = {
        email: '', password: '', remember: false
    };

    let errors : any = {
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
                this.ux.ajax.call(['auth-login', 'auth'], this.user)
                    .then(this.authUserDone, this.authUserError);
            },

            authUserDone (res : any) {
                this.$router.push({ path: '/' });
            },

            authUserError (res : any) {
                this.error = $.extend({}, errors, res.data.errors);
            }

        }

    }
</script>
