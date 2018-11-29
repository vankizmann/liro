<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="uk-width-1-2">
        <a :href="Liro.routes.get('liro-languages.language.edit', { language: value.id })">
            {{ value.title }}
        </a>
    </div>
    <div class="uk-width-1-2">
        <span class="uk-text-muted">
            {{ value.locale }}
        </span>
    </div>
    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-default" :active="value.default" @click="updateLanguageDefault"></app-list-switch>
    </div>
    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateLanguageState"></app-list-switch>
    </div>
    <div class="th-table-td-m uk-text-center">
        <span>
            {{ value.id }}
        </span>
    </div>
</div>

</template>
<script>

export default {

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        updateLanguageState: function () {

            var url = Liro.routes.get('liro-languages.language.edit', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageDefault: function () {

            var url = Liro.routes.get('liro-languages.language.edit', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.post(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageResponse: function (res) {

            var message = Liro.messages.get('liro-languages::message.language.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.language);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-language-index-item', this.default);
}


</script>

