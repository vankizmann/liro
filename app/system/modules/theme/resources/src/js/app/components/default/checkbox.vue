<template>

<div class="app-checkbox">
    <label v-show="label" class="uk-checkbox-label">
        <input class="uk-checkbox" type="checkbox" :id="id" :name="name" :value="value" :disabled="disabled" v-model="ghost" @change="updateValue">
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

    inject: {
        id: { default: null }
    },

    props: {

        model: {
            required: true
        },

        value: {
            required: true
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

    },

    data: function () {
        return {
            ghost: this.model
        };
    },

    watch: {

        model: function () {
            this.ghost = this.model;
        }

    },

    methods: {

        updateValue: function () {
            this.$emit('input', this.ghost);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-checkbox', this.default);
}

</script>
