<template>

<div class="liro-language-edit uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="Liro.routes.get('liro-languages.language.index')">
                {{ Liro.messages.get('theme::form.toolbar.close') }}
            </a>
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateLanguage" v-shortkey="['meta', 's']" @shortkey="updateLanguage">
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
                class="is-state uk-width-1-1" name="state" v-model="$root.language.state" :options="$root.states" :label="Liro.messages.get('liro-languages::form.language.state')"
            ></app-form-switch>

            <app-form-switch 
                class="is-default uk-width-1-1" name="default" v-model="$root.language.default" :options="$root.defaults" :label="Liro.messages.get('liro-languages::form.language.default')"
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
                name="title" v-model="$root.language.title" :label="Liro.messages.get('liro-languages::form.language.title')"
            ></app-form-input>

            <app-form-input 
                name="locale" v-model="$root.language.locale" :label="Liro.messages.get('liro-languages::form.language.locale')"
            ></app-form-input>

        </div>
    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    methods: {

        updateLanguage: function () {

            var url = Liro.routes.get('liro-languages.language.api.update', {
                language: this.$root.language.id
            });

            Axios.put(url, this.$root.language).then(this.updateLanguageResponse);
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

