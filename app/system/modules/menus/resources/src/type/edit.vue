<template>

<div class="liro-type-edit uk-flex" uk-grid>

    <portal to="app-toolbar">
        <div class="uk-navbar-item">

            <!-- Close link -->
            <a class="uk-button uk-button-primary uk-margin-small-left" :href="route('liro-menus.admin.type.index')">
                {{ trans('theme::form.toolbar.close') }}
            </a>
            <!-- Close link end -->

            <!-- Save button -->
            <a class="uk-button uk-button-success uk-margin-small-left" href="javascript:void(0)" @click="updateType">
                {{ trans('theme::form.toolbar.save') }}
            </a>
            <!-- Save button end -->

        </div>
    </portal>

    <!-- Sidebar start -->
    <div class="uk-flex-last uk-width-large">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-menus::form.legend.general') }}</span>
            </legend>

            <app-label :label="trans('liro-menus::form.type.state')">
                <app-switch class="is-state" v-model="type.state">
                    <app-switch-option v-for="item in states" :key="item.value" :value="item.value" :label="item.label"></app-switch-option>
                </app-switch>
            </app-label>

            <app-label :label="trans('liro-menus::form.type.locale')">
                <app-select v-model="type.locale" :placeholder="trans('liro-menus::form.type.select_locale')">
                    <app-select-option v-for="item in locales" :key="item.value" :value="item.value" :label="item.label"></app-select-option>
                </app-select>
            </app-label>

        </div>
    </div>
    <!-- Sidebar end -->

    <!-- Form start -->
    <div class="uk-flex-first uk-flex-auto">
        <div class="th-form">

            <legend class="uk-legend uk-legend-small">
                <span>{{ trans('liro-menus::form.legend.info') }}</span>
            </legend>

            <app-label :label="trans('liro-menus::form.type.title')" :required="true">
                <app-input v-model="type.title"></app-input>
            </app-label>

            <app-label :label="trans('liro-menus::form.type.route')" :required="true">
                <app-input v-model="type.route"></app-input>
            </app-label>

            <app-label :label="trans('liro-menus::form.type.theme')" :required="true">
                <app-input v-model="type.theme"></app-input>
            </app-label>

        </div>
    </div>
    <!-- Form end -->

</div>
</template>
<script>

export default {

    computed: {

        states: function () {
            return this.$root.states;
        },

        locales: function () {
            return this.$root.locales;
        },

        type: function () {
            return this.$root.type;
        }

    },

    methods: {

        updateType: function () {

            var url = Liro.routes.get('liro-menus.ajax.type.update', {
                type: this.type.id
            });

            Axios.put(url, this.type).then(this.updateTypeResponse);
        },

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

