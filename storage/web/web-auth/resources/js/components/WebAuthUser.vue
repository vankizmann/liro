<template>
    <NLoader :visible="load" size="small" class="web-auth__user">
        <div class="grid grid--row grid--middle grid--10">
            <div class="col--flex-0">
                <div class="web-auth__user-image">
                    <img :src="'//api.adorable.io/avatars/150/' + user.email" :alt="user.name">
                </div>
            </div>
            <div class="col--flex-1">
                <div class="web-auth__user-name">
                    {{ user.name }}
                </div>
            </div>
        </div>

    </NLoader>
</template>
<script>
    export default {

        name: 'WebAuthUser',

        data()
        {
            let user = {
                name: 'Anonymous', email: 'user@email.com'
            };

            return { user: user, load: true };
        },

        mounted()
        {
            this.fetchUser();
        },

        methods: {

            fetchUser()
            {
                let route = this.Route.get('module.web-auth.auth.user');

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(res => this.Data.set('auth', this.user = res.data))
            }

        }

    }
</script>
