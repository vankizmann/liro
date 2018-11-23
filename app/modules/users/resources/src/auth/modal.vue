<template>

<div class="liro-auth-modal" ref="modal" uk-modal="esc-close: false; bg-close: false; container: false;">
    <div class="uk-modal-dialog uk-padding">

        <!-- Form start -->
        <form class="uk-form uk-margin-remove" method="post" @submit.prevent="authUser">

            <div class="uk-margin-small-bottom">
                <label class="uk-form-label" for="email">{{ Liro.messages.get('liro-users::form.auth.email') }}</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="email" type="email" name="email" v-model="user.email">
                </div>
            </div>

            <div class="uk-margin-small-bottom">
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
        setInterval(() => UIkit.modal(this.$refs.modal).show(), 1000 * 60 * 60);
    },

    methods: {

        authUser: function () {
            var url = Liro.routes.get('liro-users.auth.login');
            Axios.post(url, this.user).then(this.authUserResponse);
        },

        authUserResponse: function (res) {
            UIkit.modal(this.$refs.modal).hide();
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-auth-modal', this.default);
}

</script>

