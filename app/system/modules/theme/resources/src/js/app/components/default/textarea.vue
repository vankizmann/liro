<template>

<div class="app-textarea">
    <textarea class="uk-textarea" :type="type" :id="id" :name="name" :disabled="disabled" v-model="ghost" @input="updateValue"></textarea>
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

        type: {
            default: function () {
                return 'text';
            },
            type: [String, Number]
        },

        id: {
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

        placeholder: {
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
    Liro.vue.component('app-textarea', this.default);
}

</script>
