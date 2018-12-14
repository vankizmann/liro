<template>

<div class="liro-language-edit uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-languages.admin.language.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>

            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateLanguage" v-shortkey="['meta', 's']" @shortkey="updateLanguage">
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

            <app-label :label="trans('liro-languages::form.language.title')">
                <app-input v-model="language.title"></app-input>
            </app-label>

            <app-label :label="trans('liro-languages::form.language.locale')">
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

        updateLanguage: function () {

            var url = Liro.routes.get('liro-languages.ajax.language.update', {
                language: this.language.id
            });

            Axios.put(url, this.language).then(this.updateLanguageResponse);
        },

        updateLanguageResponse: function (res) {
            var message = Liro.messages.get('liro-languages::message.language.saved');
            UIkit.notification(message, 'success');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-language-edit', this.default);
}

</script>

