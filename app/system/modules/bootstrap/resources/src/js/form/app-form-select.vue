<template>
    <div class="uk-margin">
        <label v-show="label" class="uk-form-label" :for="id">
            <span v-html="label"></span>
        </label>
        <div :class="[ 'uk-select-group', getOptionCss(activeOption) ]">
            <button :class="{ 'uk-select uk-text-left': true, 'uk-form-danger uk-animation-shake': errors.has(name) }">
                <span>{{ activeOption ? getOptionLabel(activeOption) : placeholder }}</span>
            </button>
            <ul uk-dropdown="mode: click; pos: bottom-justify;">
                <li v-for="(option, index) in options" :key="index"  @click.prevent="valueFix = getOptionValue(option)">
                    <span>{{ getOptionLabel(option) }}</span>
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
            activeOption() {
                var config = {}; config[this.optionValue] = this.valueFix;
                return _.find(this.options, config);
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
            getOptionLabel(option) {
                
                if ( typeof option[this.optionLabel] == 'undefined' ) {
                    return '';
                }

                return option[this.optionLabel];
            },
            getOptionValue(option) {
                
                if ( typeof option[this.optionValue] == 'undefined' ) {
                    return '';
                }

                return option[this.optionValue];
            },
            getOptionCss(option) {

                if ( typeof option[this.optionCss] == 'undefined' ) {
                    return '';
                }

                return option[this.optionCss];
            },
            getOptionStyle(option) {
                var style = [this.getOptionCss(option)];

                if ( this.valueFix == this.getOptionValue(option) ) {
                    style.push('uk-active');
                }

                return style;
            }
        }
    }
    liro.component(module.exports);
</script>
