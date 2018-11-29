<template>

<div class="liro-auth-modal" ref="modal" uk-modal="esc-close: false; bg-close: false; container: false;">
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-padding">

        <!-- Form start -->
        <form class="uk-form uk-margin-remove" method="post" @submit.prevent="authUser">

            <div class="uk-margin-bottom">
                <label class="uk-form-label" for="email">{{ Liro.messages.get('liro-users::form.auth.email') }}</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="email" type="email" name="email" v-model="user.email">
                </div>
            </div>

            <div class="uk-margin-bottom">
                <label class="uk-form-label" for="password">{{ Liro.messages.get('liro-users::form.auth.password') }}</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="password" type="password" name="password" v-model="user.password">
                </div>
            </div>

            <div class="uk-form-controls">
                <button class="uk-button uk-button-primary uk-width-1-1" type="submit">{{ Liro.messages.get('liro-users::form.auth.login') }}</button>
            </div>

        </form>
        <!-- Form end -->

    </div>
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

    mounted: function () {
        // Refresh token everey 30 minutes
        setInterval(this.refreshToken, 1000 * 60 * 30);

        // Show login form after 60 minutes
        setInterval(this.showModal, 1000 * 60 * 60);
    },

    methods: {

        showModal: function () {
            UIkit.modal(this.$refs.modal).show();
        },

        authUser: function () {
            var url = Liro.routes.get('liro-users.auth.login');
            Axios.post(url, this.user).then(this.authUserResponse);
        },

        authUserResponse: function (res) {
            UIkit.modal(this.$refs.modal).hide();
        },

        refreshToken: function () {
            var url = Liro.routes.get('liro-users.auth.token');
            Axios.post(url, this.user).then(this.refreshTokenResponse);
        },

        refreshTokenResponse: function (res) {
            $('meta[csrf-token]').attr('content', res.data.token);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-auth-modal', this.default);
}

</script>

