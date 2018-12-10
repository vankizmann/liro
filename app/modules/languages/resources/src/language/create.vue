<template>

<div class="liro-language-create uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-languages.admin.language.index')">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="storeLanguage" v-shortkey="['meta', 's']" @shortkey="storeLanguage">
                {{ Liro.messages.get('theme::form.toolbar.save') }}
            </a>
        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-large">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                {{ Liro.messages.get('liro-languages::form.legend.general') }}
            </legend>

            <app-form-switch 
                class="is-state uk-width-1-1" name="state" v-model="language.state" :options="states" :label="Liro.messages.get('liro-languages::form.language.state')"
            ></app-form-switch>

            <app-form-switch 
                class="is-default uk-width-1-1" name="default" v-model="language.default" :options="defaults" :label="Liro.messages.get('liro-languages::form.language.default')"
            ></app-form-switch>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                {{ Liro.messages.get('liro-languages::form.legend.info') }}
            </legend>

            <app-form-input 
                name="title" v-model="language.title" :label="Liro.messages.get('liro-languages::form.language.title')"
            ></app-form-input>

            <app-form-input 
                name="locale" v-model="language.locale" :label="Liro.messages.get('liro-languages::form.language.locale')"
            ></app-form-input>

        </div>
    </div>
    <!-- Form end -->

</div>

</template>
<script>

export default {

    computed: {

        defaults: function () {
            return this.$root.defaults;
        },

        states: function () {
            return this.$root.states;
        },

        language: function () {
            return this.$root.language;
        }

    },

    methods: {

        storeLanguage: function () {
            var url = Liro.routes.get('liro-languages.ajax.language.store');
            Axios.post(url, this.language).then(this.storeLanguageResponse);
        },

        storeLanguageResponse: function (res) {

            var values = {
                language: res.data.id
            };

            var query = {
                success: 'liro-languages::message.language.created'
            };

            Liro.routes.redirect('liro-languages.admin.language.edit', values, query);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-language-create', this.default);
}

</script>

