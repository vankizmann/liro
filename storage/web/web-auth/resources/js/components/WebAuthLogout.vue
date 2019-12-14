<template>
    <div class="web-auth__logout">
        <NForm @submit.prevent="logoutAction">

            <NFormItem>
                <p>{{ trans('Bye bye :)') }}</p>
            </NFormItem>

            <NFormItem>
                <NButton type="primary" native-type="submit">{{ trans('Sign out') }}</NButton>
            </NFormItem>

        </NForm>
    </div>
</template>
<script>
    export default {

        name: 'WebAuthLogout',

        methods: {

            logoutAction()
            {
                let route = this.Route.get('module.web-auth.auth.logout');

                this.$http.post(route, this.form)
                    .then((res) => {
                        console.log('User logged out: ' + res.data.name);
                    });
            }

        }

    }
</script>
