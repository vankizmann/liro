<template>
    <div class="uk-margin">
        <label v-show="label" class="uk-form-label" :for="id">
            <span v-html="label"></span>
        </label>
        <input 
            :class="{ 'uk-input': true, 'uk-form-danger uk-animation-shake': errors.has(name) }" 
            :type="type" :id="id" :name="name" v-model="valueFix" v-validate="rules" :data-vv-as="label"
        >
        <div class="uk-margin-small-top uk-text-danger" v-show="errors.has(name)">
            <small>{{ errors.first(name) | capitalize }}</small>
        </div>
        <slot>
            <!-- Slot -->
        </slot>
    </div>
</template>
<script>
    module.exports = {
        props: {
            value: {
                default: '',
                type: [String, Number, Object, Array]
            },
            label: {
                default: '',
                type: String
            },
            id: {
                default: '',
                type: String
            },
            name: {
                default: '',
                type: String
            },
            rules: {
                default: '',
                type: String
            },
            type: {
                default: 'text',
                type: String
            }
        },
        data() {
            return {
                valueFix: _.isObject(this.value) ? JSON.stringify(this.value) : this.value
            }
        },
        mounted() {
            this.$emit('input', this.valueFix);
        },
        watch: {
            valueFix() {
                this.$emit('input', this.valueFix);
            },
            value() {
                this.valueFix = this.value;
            }
        }
    }
    liro.vue.$component('app-form-input', module.exports);
</script>
