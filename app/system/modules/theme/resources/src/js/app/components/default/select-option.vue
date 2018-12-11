<template>

<li :class="{ 'app-select-option': true, 'is-active': active }" :data-value="value">
    <a class="app-select-link" href="javascript:void(0)" @click="select.select(value)">
        <span class="app-select-left uk-flex uk-flex-middle" v-html="label"></span>
        <span class="app-select-right uk-flex uk-flex-middle" v-html="check"></span>
    </a>
</li>

</template>
<script>

export default {

    inject: [
        'select'
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
            return _.hasValue(this.select.model, this.value);
        }

    },

    created: function () {
        this.select.options.push({
            label: this.label, value: this.value
        });
    }

}

if (window.Liro) {
    Liro.vue.component('app-select-option', this.default);
}

</script>
