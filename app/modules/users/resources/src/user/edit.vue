<template>

<div class="liro-user-edit uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-users.admin.user.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateUser" v-shortkey="['meta', 's']" @shortkey="updateUser">
                {{ trans('theme::form.toolbar.save') }}
            </a>

        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-1-1 uk-width-large@l">
        <div class="th-form">

            <legend class="uk-legend">
                <span>{{ trans('liro-users::form.legend.general') }}</span>
            </legend>

            <app-label :label="trans('liro-users::form.user.state')">
                <app-switch class="is-state" v-model="user.state">
                    <app-switch-option v-for="state in states" :key="state.value" :value="state.value" :label="state.label"></app-switch-option>
                </app-switch>
            </app-label>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">

        <div class="th-form">

            <legend class="uk-legend">
                <span>{{ trans('liro-users::form.legend.info') }}</span>
            </legend>

            <app-label :label="trans('liro-users::form.user.name')" :required="true">
                <app-input v-model="user.name"></app-input>
            </app-label>

            <app-label :label="trans('liro-users::form.user.email')" :required="true">
                <app-input v-model="user.email"></app-input>
            </app-label>

            <app-label :label="trans('liro-users::form.user.role')">
                <app-select v-model="user.role_ids" :multiple="true" :placeholder="trans('liro-users::form.user.select_role')">
                    <app-select-option v-for="role in roles" :key="role.id" :value="role.id" :label="role.title"></app-select-option>
                </app-select>
            </app-label>

        </div>

        <div class="th-form">

            <legend class="uk-legend">
                <span>{{ trans('liro-users::form.legend.password') }}</span>
            </legend>

            <app-label :label="trans('liro-users::form.user.password')">
                <app-input type="password" v-model="user.password"></app-input>
            </app-label>

            <app-label :label="trans('liro-users::form.user.password_confirm')">
                <app-input type="password" v-model="user.password_confirm"></app-input>
            </app-label>

        </div>

    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    computed: {

        states: function () {
            return this.$root.states;
        },

        roles: function () {
            return this.$root.roles;
        },

        user: function () {
            return this.$root.user;
        }

    },

    methods: {

        updateUser: function () {

            var url = Liro.routes.get('liro-users.ajax.user.update', {
                user: this.user.id
            });

            Axios.put(url, this.user).then(this.updateUserResponse);
        },

        updateUserResponse: function (res) {
            var message = Liro.messages.get('liro-users::message.user.saved');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-user-edit', this.default);
}

</script>

