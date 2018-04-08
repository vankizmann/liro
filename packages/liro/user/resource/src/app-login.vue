<template>
    <div class="app-login">
        <el-form :method="method" :action="action" :model="form" @submit.native.prevent="validateForm">

            <div class="form-group">
                <h2 class="display-2">Login</h2>
            </div>

            <div class="form-group">
                <el-input type="email" name="email" 
                    :placeholder="$t('user.email_placeholder')" v-model="form.email" v-validate="'required|email'"></el-input>
                <small class="form-text text-danger" v-show="errors.has('email')">{{ errors.first('email') | capitalize }}</small>
            </div>

            <div class="form-group">
                <el-input type="password" name="password" 
                    :placeholder="$t('user.password_placeholder')" v-model="form.password" v-validate="'required|min:6'"></el-input>
                <small class="form-text text-danger" v-show="errors.has('password')">{{ errors.first('password') | capitalize }}</small>
            </div>

            <slot></slot>

            <div class="form-group text-right">
                <el-button type="primary" native-type="submit">{{ $t('user.login') }}</el-button>
            </div>

        </el-form>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-login',
        props: {
            action: {
                default: '',
                type: String
            },
            method: {
                default: 'post',
                type: String
            }
        },
        data() {
            return {
                form: {
                    email:      '',
                    password:   ''
                }
            }
        },
        methods: {
            validateForm(event) {
                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        return;
                    }
                    $(event.target).submit();
                });
            }
        }
    }
    liro.component(module.exports);
</script>
