<template>

<div class="liro-user-create uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-users.user.index')">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="storeUser" v-shortkey="['meta', 's']" @shortkey="storeUser">
                {{ Liro.messages.get('theme::form.toolbar.save') }}
            </a>
        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-large">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                {{ Liro.messages.get('liro-users::form.legend.general') }}
            </legend>

            <app-form-switch 
                class="is-state uk-width-1-1" name="state" v-model="user.state" :options="states" :label="Liro.messages.get('liro-users::form.user.state')"
            ></app-form-switch>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">

        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                {{ Liro.messages.get('liro-users::form.legend.info') }}
            </legend>

            <app-form-input 
                name="name" v-model="user.name" :label="Liro.messages.get('liro-users::form.user.name')"
            ></app-form-input>

            <app-form-input 
                name="email" v-model="user.email" :label="Liro.messages.get('liro-users::form.user.email')"
            ></app-form-input>

            <app-form-select-multiple 
                name="role_ids" v-model="user.role_ids" :options="roles" :multiple="true" options-label="title" options-value="id" :label="Liro.messages.get('liro-users::form.user.role')" :placeholder="Liro.messages.get('liro-users::form.user.select_role')"
            ></app-form-select-multiple>

        </div>
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                {{ Liro.messages.get('liro-users::form.legend.password') }}
            </legend>

            <app-form-input 
                type="password" name="password" v-model="user.password" :label="Liro.messages.get('liro-users::form.user.password')"
            ></app-form-input>
            
            <app-form-input 
                type="password" name="password_confirm" v-model="user.password_confirm" :label="Liro.messages.get('liro-users::form.user.password_confirm')"
            ></app-form-input>

        </div>

    </div>
    <!-- Form end -->

</div>

</template>
<script>

export default {

    data() {
        return {
            states: this.Liro.data.get('states'),
            roles: this.Liro.data.get('roles'),
            user: this.Liro.data.get('user')
        };
    },

    methods: {

        storeUser: function () {
            var url = Liro.routes.get('liro-users.user.create');
            Axios.post(url, this.user).then(this.storeUserResponse);
        },

        storeUserResponse: function (res) {

            var values = {
                user: res.data.user.id
            };

            var query = {
                success: 'liro-users::message.user.created'
            };

            Liro.routes.redirect('liro-users.user.edit', values, query);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-user-create', this.default);
}

</script>

