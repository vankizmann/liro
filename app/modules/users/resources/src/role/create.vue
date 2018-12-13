<template>

<div class="liro-role-create">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-users.admin.role.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="storeRole" v-shortkey="['meta', 's']" @shortkey="storeRole">
                {{ trans('theme::form.toolbar.save') }}
            </a>
        </div>
    </portal>

    <!-- Form start -->
    <div class="th-form">

        <legend class="uk-legend">
            <span>{{ trans('liro-users::form.legend.info') }}</span>
        </legend>

        <app-label :label="trans('liro-users::form.role.title')">
            <app-input name="title" v-model="role.title"></app-input>
        </app-label>

        <app-label :label="trans('liro-users::form.role.description')">
            <app-input name="description" v-model="role.description"></app-input>
        </app-label>

        <app-label :label="trans('liro-users::form.role.access')">
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

        storeRole: function () {
            var url = Liro.routes.get('liro-users.ajax.role.store');
            Axios.post(url, this.role).then(this.storeRoleResponse);
        },

        storeRoleResponse: function (res) {

            var values = {
                role: res.data.id
            };

            var query = {
                success: 'liro-users::message.role.created'
            };

            Liro.routes.redirect('liro-users.admin.role.edit', values, query);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-create', this.default);
}

</script>

