<template>
    <NLoader :visible="load" size="small" class="web-auth__user">

        <div class="grid grid--row grid--middle grid--10">
            <div class="col--flex-0">
                <div class="web-auth__user-image">
                    <img :src="'//api.adorable.io/avatars/150/' + user.email" :alt="user.name">
                </div>
            </div>
            <div class="col--flex-1">
                <div id="auth-popover" class="web-auth__user-button">
                    <NButton type="link" icon="fa fa-angle-down" icon-position="right">
                        {{ user.name }}
                    </NButton>
                </div>
            </div>
        </div>

        <NPopover selector="#auth-popover" trigger="click" type="account" position="bottom-end" :width="320" @input="ready = true">
            <NTabs v-if="ready">
                <NTabsItem :label="trans('Notifications')" name="notifications">
                    <div style="text-align: center; padding: 25px 20px;">{{ trans('No notifications.') }}</div>
                </NTabsItem>
                <NTabsItem :label="trans('Tasks')" name="tasks">
                    <div style="text-align: center; padding: 25px 20px;">{{ trans('No tasks.') }}</div>
                </NTabsItem>
            </NTabs>
            <template slot="footer">
                <div class="grid grid--row grid--center grid--20">
                    <div class="col--flex-0">
                        <NButton type="link" @click="callEdit">{{ trans('Edit account')}}</NButton>
                    </div>
                    <div class="col--flex-0">
                        <NButton type="link" @click="callLogout">{{ trans('Logout')}}</NButton>
                    </div>
                </div>
            </template>
        </NPopover>

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

            return { user: user, load: true, ready: false, popover: false };
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
                    .then(res => this.Data.set('auth', this.user = res.data));
            },

            callLogout()
            {
                let route = this.Route.get('module.web-auth.auth.logout');

                this.$http.post(route, this.form)
                    .then((res) => this.Route.goto(res.data.redirect));
            },

            callEdit()
            {
                console.log('edit account');
            }

        }

    }
</script>
