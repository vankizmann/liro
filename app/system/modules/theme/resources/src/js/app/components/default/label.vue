<template>

<div :class="{ 'app-label': true, 'is-required': required, 'is-horizontal': horizontal }">
    <label class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <div class="uk-form-controls">
        <slot></slot><slot name="controls"></slot>
    </div>
</div>

</template>
<script>

export default {

    props: {

        label: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        id: {
            default: function () {
                return _.uniqueId('app-form-');
            },
            type: [String, Number]
        },

        required: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        },

        horizontal: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        }

    },

    provide: function () {
        return {
            id: this.id
        };
    }

}

if (window.Liro) {
    Liro.vue.component('app-label', this.default);
}

</script>
