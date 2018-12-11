<template>

<div class="app-label">
    <label class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <div class="uk-form-controls">
        <slot></slot>
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
