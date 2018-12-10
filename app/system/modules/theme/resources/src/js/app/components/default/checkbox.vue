<template>

<div class="app-checkbox">
    <label v-show="label" class="uk-checkbox-label">
        <input class="uk-checkbox" type="checkbox" :id="id" :name="name" :value="value" :disabled="disabled" v-model="ghost">
        <span v-if="label" v-html="label"></span>
    </label>
</div>

</template>
<script>

export default {

    model: {
        prop: 'model',
        event: 'input'
    },

    computed: {

        ghost: {
            get: function () {
                return this.model;
            },
            set: function (value) {
                this.$emit('input', value);
            }
        }

    },

    props: {

        model: {
            required: true,
            type: [String, Number, Boolean, Array]
        },

        value: {
            required: true,
            type: [String, Number, Boolean]
        },

        id: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        label: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        name: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        disabled: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-checkbox', this.default);
}

</script>
