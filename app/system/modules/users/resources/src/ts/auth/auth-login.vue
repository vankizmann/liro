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
                <div class="grid grid--row grid--middle">
                    <div class="col col--left">
                        <el-checkbox v-model="user.remember">
                            {{ trans('liro-users::form.auth.remember_me') }}
                        </el-checkbox>
                    </div>
                    <div class="col col--right">
                        <router-link to="/reset-password">
                            {{ trans('liro-users::form.auth.password_forget') }}
                        </router-link>
                    </div>
                </div>

            </el-form-item>

            <el-form-item>
                <el-button class="login__submit" type="primary" native-type="submit">
                    {{ trans('liro-users::form.auth.login') }}
                </el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script lang="ts">

    declare var _ : any;

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
                this.ux.ajax.call(['auth-login', 'auth'], true, this.user)
                    .then(this.authUserDone, this.authUserError);
            },

            authUserDone (res : any) {
                this.$router.push({ path: '/' });
            },

            authUserError (res : any) {
                this.error = _.assign({}, errors, res.data.errors);
            }

        }

    }

</script>
