<template>

<div class="liro-role-edit">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-users.role.index')">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateRole" v-shortkey="['meta', 's']" @shortkey="updateRole">
                {{ Liro.messages.get('theme::form.toolbar.save') }}
            </a>
        </div>
    </portal>

    <!-- Form start -->
    <div class="th-form">

        <legend class="uk-legend uk-legend-small">
            {{ Liro.messages.get('liro-users::form.legend.info') }}
        </legend>

        <app-form-input 
            name="title" v-model="role.title" :label="Liro.messages.get('liro-users::form.role.title')"
        ></app-form-input>

        <app-form-input 
            name="description" v-model="role.description" :label="Liro.messages.get('liro-users::form.role.description')"
        ></app-form-input>

        <app-form-input 
            name="access" v-model="role.access" :label="Liro.messages.get('liro-users::form.role.access')"
        ></app-form-input>

    </div>
    <!-- Form end -->

    <!-- Module start -->
    <template v-for="(module, type) in modules" v-if="module.length != 0">
        <div class="th-form" v-for="(routes, index) in module" :key="index">

            <legend class="uk-legend uk-legend-small">
                <span class="uk-label uk-label-primary">{{ type }}</span>
                <span class="uk-margin-small-left">{{ index }}</span>
            </legend>

            <div class="uk-flex uk-grid-small uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>
                <label v-for="(name, index) in routes" :key="index" class="uk-checkbox-label">
                    <input class="uk-checkbox" type="checkbox" v-model="role.route_names" :value="index">
                    <span>{{ name }}</span>
                </label>
            </div>

        </div>
    </template>
    <!-- Module end -->

</div>
</template>
<script>

export default {

    data() {
        return {
            modules: this.Liro.data.get('modules'),
            role: this.Liro.data.get('role')
        };
    },

    methods: {

        updateRole: function () {

            var url = Liro.routes.get('liro-users.role.edit', {
                role: this.role.id
            });

            Axios.post(url, this.role).then(this.updateRoleResponse);
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

