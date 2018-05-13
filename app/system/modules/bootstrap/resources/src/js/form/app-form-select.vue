<template>
    <div class="uk-margin">
        <label v-show="label" class="uk-form-label" :for="id">
            <span v-html="label"></span>
        </label>
        <div :class="[ 'uk-select-group', _css(active) ]">
            <button :class="{ 'uk-select uk-text-left': true, 'uk-form-danger uk-animation-shake': errors.has(name) }">
                <span>{{ active ? _label(active) : placeholder }}</span>
            </button>
            <ul uk-dropdown="mode: click; pos: bottom-justify;">
                <li v-for="(option, index) in options" :key="index" :class="_style(option)" @click.prevent="valueFix = _value(option)">
                    <span>{{ _label(option) }}</span>
                </li>
            </ul>
            <input type="hidden" :id="id" :name="name" v-model="valueFix" v-validate="rules" :data-vv-as="label">
        </div>
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
        name: 'app-form-select',

        computed: {
            active() {
                return _.find(this.options, [this.optionValue, this.valueFix]);
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
            placeholder: {
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
            options: {
                default: () => {
                    return [];
                },
                type: Array
            },
            optionValue: {
                default: 'value',
                type: String
            },
            optionLabel: {
                default: 'label',
                type: String
            },
            optionCss: {
                default: 'css',
                type: String
            }
        },
        data() {
            return {
                open: false,
                valueFix: this.value
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
        },
        methods: {
            _active(option) {
                return this.valueFix == this._value(option);
            },
            _label(option) {
                return option[this.optionLabel];
            },
            _value(option) {
                return option[this.optionValue];
            },
            _css(option) {
                return _.isPlainObject(option) ? option[this.optionCss] || '' : '';
            },
            _style(option) {
                return [this._css(option), this._active(option) ? 'uk-active' : 'uk-inactive'];
            }
        }
    }
    liro.component(module.exports);
</script>
