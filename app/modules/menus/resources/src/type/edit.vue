<template>

<div class="liro-type-edit">

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <!-- Close link -->
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-menus.type.index')">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <!-- Close link end -->

            <!-- Save button -->
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateType">
                {{ Liro.messages.get('theme::form.toolbar.save') }}
            </a>
            <!-- Save button end -->

        </div>
    </portal>

    <!-- Form start -->
    <div class="th-form">

        <app-form-select 
            name="state" v-model="type.state" :options="states" :label="Liro.messages.get('liro-menus::form.type.state')" :placeholder="Liro.messages.get('liro-menus::form.type.select_state')"
        ></app-form-select>

        <app-form-select 
            name="locale" v-model="type.locale" :options="locales" :label="Liro.messages.get('liro-menus::form.type.locale')" :placeholder="Liro.messages.get('liro-menus::form.type.select_locale')"
        ></app-form-select>

        <app-form-input 
            name="title" v-model="type.title" :label="Liro.messages.get('liro-menus::form.type.title')"
        ></app-form-input>

        <app-form-input 
            name="route" v-model="type.route" :label="Liro.messages.get('liro-menus::form.type.route')"
        ></app-form-input>

        <app-form-input 
            name="theme" v-model="type.theme" :label="Liro.messages.get('liro-menus::form.type.theme')"
        ></app-form-input>

    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    /**
     * Get data from liro framework
     */
    data: function () {
        return {
            states: this.Liro.data.get('states'),
            locales: this.Liro.data.get('locales'),
            type: this.Liro.data.get('type')
        };
    },

    methods: {

        /**
         * Submit ajax request to save type
         */
        updateType: function () {

            var url = Liro.routes.get('liro-menus.type.edit', {
                type: this.type.id
            });

            Axios.post(url, this.type).then(this.updateTypeResponse);
        },

        /**
         * Show success message
         */
        updateTypeResponse: function (res) {
            var message = Liro.messages.get('liro-menus::message.type.saved');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-type-edit', this.default);
}

</script>

