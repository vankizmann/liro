<template>

<li :class="{ 'app-switch-option uk-flex-1': true, 'is-active': active }" :data-value="value">
    <a class="app-switch-link uk-width-1-1 uk-label" href="javascript:void(0)" @click="selectValue">
        <span class="app-switch-text" v-html="label"></span>
    </a>
</li>

</template>
<script>

export default {

    inject: [
        'switch'
    ],

    props: {

        value: {
            required: true,
            type: [String, Number, Boolean]
        },

        label: {
            required: true,
            type: [String, Number]
        },

        check: {
            default: function () {
                return '<i class="is-check uk-icon-small" uk-icon="check"></i>';
            },
            type: [String, Number]
        },

        disabled: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        }

    },

    computed: {

        active: function () {
            return _.hasValue(this.switch.model, this.value);
        }

    },

    methods: {

        selectValue: function () {
            this.switch.switch(this.value);
        }

    },

    created: function () {
        this.switch.options.push({
            label: this.label, value: this.value
        });
    }

}

if (window.Liro) {
    Liro.vue.component('app-switch-option', this.default);
}

</script>
