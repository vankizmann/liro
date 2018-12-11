<template>

<div class="app-input">
    <input class="uk-input" :type="type" :id="id" :name="name" :disabled="disabled" v-model="ghost">
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
            required: true,
            type: [String, Number, Boolean]
        },

        type: {
            default: function () {
                return 'text';
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

        ghost: function () {
            this.$emit('input', this.ghost);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-input', this.default);
}

</script>
