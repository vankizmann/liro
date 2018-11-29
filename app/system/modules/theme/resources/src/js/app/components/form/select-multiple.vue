<template>

<div class="app-form-select">

    <!-- Label start -->
    <label v-show="label" class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <!-- Label end -->

    <div class="uk-form-controls">

        <div class="uk-select" v-if="labels.length != 0">
            <span class="uk-label uk-label-primary" v-for="(option, index) in labels" :key="index">{{ option }}</span>
        </div>

        <div class="uk-select" v-if="labels.length == 0">
            <span class="uk-text-muted">{{ placeholder }}</span>
        </div>

        <div ref="dropdown" uk-dropdown="mode: click; pos: bottom-justify;">
            <ul class="uk-nav uk-dropdown-nav">
                <li v-for="(option, index) in options" :key="index" :class="{ 'uk-active':_value.indexOf(option[optionsValue]) != -1 }">
                    <label class="uk-checkbox-label">
                        <input class="uk-checkbox" type="checkbox" :value="option[optionsValue]" v-model="_value">
                        <span>{{ option[optionsLabel] }}</span>
                    </label>
                </li>
            </ul>
        </div>

        <input type="hidden" name="name" :value="_value.join(',')">

    </div>

</div>

</template>
<script>

export default {

    computed: {

        _value: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit('input', value);
            }
        },

        labels: function () {
            return this.getLabels();
        }

    },

    props: {
        value: {
            required: true,
            type: Array
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
        options: {
            required: true,
            type: [Array, Object]
        },
        optionsValue: {
            default: 'value',
            type: String
        },
        optionsLabel: {
            default: 'label',
            type: String
        }
    },

    mounted: function () {
        this.$watch('value', () => this.$emit('change', this.value));
    },

    methods: {
        
        getOptions: function () {
            return _.filter(this.options, (option) => {
                return this._value.indexOf(option[this.optionsValue]) != -1;
            });
        },

        getValues: function () {
            return this.getOptions().map((option) => {
                return option[this.optionsValue];
            });
        },

        getLabels: function () {
            return this.getOptions().map((option) => {
                return option[this.optionsLabel];
            });
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-form-select-multiple', this.default);
}

</script>
