<template>
    <div class="app-logout__wrapper">
        <div class="app-logout">
            <div class="app-logout__image" v-if="Data.has('theme.logout')">
                <img :src="Data.get('theme.logout')">
            </div>
            <div class="app-logout__title">
                <h1>{{ trans('liro-users::form.logout.title') }}</h1>
            </div>
            <div class="app-logout__text">
                <p>{{ trans('liro-users::form.logout.message') }}</p>
            </div>
        </div>
    </div>
</template>
<script>

    export default {

        name: 'app-logout',

        beforeMount()
        {
            this.logoutUser();
        },

        methods: {

            logoutUser()
            {
                this.Ajax.call(['auth-logout', 'auth'], true)
                    .then(this.logoutUserDone, this.logoutUserError);
            },

            logoutUserDone(res)
            {
                this.Any.delay(() => {
                    this.$router.push({ name: 'auth-login' });
                }, 2000)

            },

            logoutUserError(res)
            {
                this.Any.delay(() => {
                    this.$router.push({ name: 'auth-login' });
                }, 2000)
            }

        }

    }

</script>
