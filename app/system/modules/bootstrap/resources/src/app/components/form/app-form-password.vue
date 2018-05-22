<template>
    <div class="uk-margin">
        <label v-show="label" class="uk-form-label" :for="id">
            <span v-html="label"></span>
        </label>
        <div style="position: relative;">
            <input 
                :class="{ 'uk-input': true, 'uk-form-danger uk-animation-shake': errors.has(name) }" 
                :type="showPassword ? 'text' : 'password'" :id="id" :name="name" v-model="valueFix" v-validate="rules"
            >
            <a class="uk-form-icon uk-form-icon-flip uk-icon" style="text-decoration: none;" @click.prevent="toggleFunc">
                <i v-if="!showPassword" class="fa fa-eye"></i>
                <i v-else class="fa fa-eye-slash"></i>
            </a>
        </div>
        <div class="uk-margin-small-top uk-text-danger" v-show="errors.has(name)">
            <small>{{ errors.first(name) | capitalize }}</small>
        </div>
        <div class="uk-margin-small-top" v-show="generate">
            <small><a @click.prevent="generateFunc"><span v-html="generate"></span></a></small>
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
                type: String
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
            generate: {
                default: '',
                type: String
            }
        },
        data() {
            return {
                valueFix: this.value,
                showPassword: false
            }
        },
        mounted() {
            this.$emit('input', this.valueFix);
        },
        methods: {
            toggleFunc() {
                this.showPassword = !this.showPassword;
            },
            generateFunc() {
                var password = Math.random().toString(36).substring(2,10) + Math.random().toString(36).substring(2,10);
                this.$emit('input', password);
            }
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
    liro.vue.$component('app-form-password', module.exports);
</script>


