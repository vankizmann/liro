<template>

<div class="app-form-input">
    <label v-show="label" class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <div class="uk-form-controls">
        <input class="uk-input" :type="type" :id="id" :name="name" v-model="$value" :disabled="disabled" :placeholder="placeholder">
    </div>
</div>

</template>
<script>

export default {

    computed: {

        $value: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit('input', value);
            }
        }

    },

    props: {

        value: {
            default: '',
            type: [String, Number]
        },

        label: {
            default: '',
            type: String
        },

        id: {
            default: () => _.uniqueId('form-input-'),
            type: String
        },

        name: {
            default: '',
            type: String
        },

        placeholder: {
            default: '',
            type: String
        },

        type: {
            default: 'text',
            type: String
        },

        disabled: {
            default: false,
            type: Boolean
        }

    }
}

if (window.Liro) {
    Liro.vue.component('app-form-input', this.default);
}

</script>
