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

    <!-- Form start -->
    <div v-if="modules.length != 0">

        <ul uk-tab>
            <li v-for="(module, type) in modules" :key="type">
                <a href="javascript:void(0)">{{ type }}</a>
            </li>
        </ul>

        <ul class="uk-switcher uk-margin">
            <li v-for="(module, type) in modules" :key="type">
                <div class="th-form" v-for="(routes, index) in module" :key="type + '-' + index">
                    <legend class="uk-legend uk-legend-small">
                        <span>{{ index }}</span>
                    </legend>
                    <div class="uk-margin">
                        <div class="uk-grid-small uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>
                            <template v-for="(name, index) in routes">
                                <app-checkbox :key="index" :label="name" :value="index" v-model="role.route_names"></app-checkbox>
                            </template>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>

</div>
</template>
<script>

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

