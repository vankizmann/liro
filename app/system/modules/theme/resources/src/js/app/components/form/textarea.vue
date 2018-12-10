<template>

<div class="app-form-textarea">
    <label v-if="label" class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <div class="uk-form-controls">
        <app-textarea :type="type" :id="id" :name="name" v-model="ghost" :disabled="disabled" :placeholder="placeholder"></app-textarea>
    </div>
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
            required: true
        },

        id: {
            default: function () {
                return _.uniqueId('app-form-');
            },
        },

        label: {
            default: function () {
                return null;
            }
        },

        name: {
            default: function () {
                return null;
            }
        },

        placeholder: {
            default: function () {
                return null;
            }
        },

        disabled: {
            default: function () {
                return null;
            }
        }

    }
}

if (window.Liro) {
    Liro.vue.component('app-form-textarea', this.default);
}

</script>
