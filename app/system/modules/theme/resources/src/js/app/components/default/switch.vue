<template>

<div class="app-switch">

    <div class="uk-input">
        <ul class="uk-list uk-flex-1 uk-flex uk-flex-middle">
            <slot></slot>
        </ul>
    </div>

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

        multiple: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
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
            ghost: this.model,
            options: []
        };
    },

    watch: {

        ghost: function () {
            this.$emit('input', this.ghost);
        }

    },

    methods: {

        switch: function (value) {
            this.ghost = _.changeValue(this.ghost, value);
        }

    },

    provide: function () {
        return {
            switch: this
        };
    }

}

if (window.Liro) {
    Liro.vue.component('app-switch', this.default);
}

</script>
