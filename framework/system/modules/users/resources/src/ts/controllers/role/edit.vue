<template>

<div class="liro-role-edit">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-users.admin.role.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateRole" v-shortkey="['meta', 's']" @shortkey="updateRole">
                {{ trans('theme::form.toolbar.save') }}
            </a>

        </div>
    </portal>

    <!-- Form start -->
    <div class="th-form">

        <legend class="uk-legend">
            <span>{{ trans('liro-users::form.legend.info') }}</span>
        </legend>

        <app-label :label="trans('liro-users::form.role.title')" :required="true">
            <app-input name="title" v-model="role.title"></app-input>
        </app-label>

        <app-label :label="trans('liro-users::form.role.description')">
            <app-input name="description" v-model="role.description"></app-input>
        </app-label>

        <app-label :label="trans('liro-users::form.role.access')" :required="true">
            <app-input name="access" v-model="role.access"></app-input>
        </app-label>

    </div>
    <!-- Form end -->

    <!-- Form start -->
    <div v-if="modules.length != 0">

        <ul uk-tab>
            <li v-for="(item, index) in modules" :key="index">
                <a href="javascript:void(0)">{{ index }}</a>
            </li>
        </ul>

        <ul class="uk-switcher uk-margin">
            <li v-for="(items, index) in modules" :key="index">
                <liro-role-edit-module :items="items" v-model="role.route_names"></liro-role-edit-module>
            </li>
        </ul>

    </div>
    <!-- Form end -->

</div>
</template>
<script>

import EditModule from './edit/module';

export default {

    computed: {

        modules: function () {
            return this.$root.modules;
        },

        role: function () {
            return this.$root.role;
        }

    },

    methods: {

        updateRole: function () {

            var url = Liro.routes.get('liro-users.ajax.role.update', {
                role: this.role.id
            });

            Axios.put(url, this.role).then(this.updateRoleResponse);
        },

        updateRoleResponse: function (res) {
            var message = Liro.messages.get('liro-users::message.role.saved');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-edit', this.default);
}

</script>

