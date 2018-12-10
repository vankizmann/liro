<template>

<div class="liro-auth-login" ref="form">

    <!-- Form start -->
    <form class="uk-form uk-margin-remove" method="post" @submit.prevent="authUser">

        <div class="uk-margin-bottom">
            <div class="uk-flex">
                <label class="uk-form-label" for="email">{{ Liro.messages.get('liro-users::form.auth.email') }}</label>
            </div>
            <div class="uk-form-controls">
                <input class="uk-input" id="email" type="email" name="email" v-model="user.email">
            </div>
        </div>

        <div class="uk-margin-bottom">
            <div class="uk-flex">
                <label class="uk-form-label uk-margin-auto-right" for="password">{{ Liro.messages.get('liro-users::form.auth.password') }}</label>
                <a class="uk-form-label-link" href="#">{{ Liro.messages.get('liro-users::form.auth.password_forget') }}</a>
            </div>
            <div class="uk-form-controls">
                <input class="uk-input" id="password" type="password" name="password" v-model="user.password">
            </div>
        </div>

        <!--
        <div class="uk-margin-bottom">
            <div class="uk-form-controls">
                <label class="uk-checkbox-label"><input class="uk-checkbox" type="checkbox" name="remember"> {{ Liro.messages.get('liro-users::form.auth.remember_me') }}</label>
            </div>
        </div>
        -->

        <div class="uk-form-controls">
            <button class="uk-button uk-button-primary uk-width-1-1" type="submit">
                <i uk-icon="key"></i> <span>{{ Liro.messages.get('liro-users::form.auth.login') }}</span>
            </button>
        </div>

    </form>
    <!-- Form end -->

</div>

</template>
<script>

export default {

    data: function () {
        return {
            user: {
                email: '', password: ''
            }
        }
    },

    methods: {

        authUser: function () {
            var url = Liro.routes.get('liro-users.ajax.auth.login');
            Axios.post(url, this.user).then(this.authUserResponse, this.authUserError);
        },

        authUserError: function (res) {

            setTimeout(() => {
                $(this.$refs.form).removeClass('uk-animation-shake');
            }, 1000);

            $(this.$refs.form).addClass('uk-animation-shake');
        },

        authUserResponse: function (res) {
            Liro.routes.redirect(res.data.redirect, null, null);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-auth-login', this.default);
}

</script>

