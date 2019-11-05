<template>

<div class="liro-language-create uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-languages.admin.language.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="storeLanguage" v-shortkey="['meta', 's']" @shortkey="storeLanguage">
                {{ trans('theme::form.toolbar.save') }}
            </a>

        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-large">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-languages::form.legend.general') }}</span>
            </legend>

            <app-label :label="trans('liro-languages::form.language.state')">
                <app-switch class="is-state" v-model="language.state">
                    <app-switch-option v-for="item in states" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

            <app-label :label="trans('liro-languages::form.language.default')">
                <app-switch class="is-default" v-model="language.default">
                    <app-switch-option v-for="item in defaults" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-languages::form.legend.info') }}</span>
            </legend>

            <app-label :label="trans('liro-languages::form.language.title')" :required="true">
                <app-input v-model="language.title"></app-input>
            </app-label>

            <app-label :label="trans('liro-languages::form.language.locale')" :required="true">
                <app-input v-model="language.locale"></app-input>
            </app-label>

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

