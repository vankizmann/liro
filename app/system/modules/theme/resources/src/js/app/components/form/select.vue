<template>

<div class="app-form-select">

    <!-- Label start -->
    <label v-show="label" class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <!-- Label end -->

    <div class="uk-form-controls">

        <div class="uk-select" v-if="labels.length != 0">
            <span :class="{ 'uk-label uk-label-primary': multiple }" v-for="(option, index) in labels" :key="index">{{ option }}</span>
        </div>

        <div class="uk-select" v-if="labels.length == 0">
            <span class="uk-text-muted">{{ placeholder }}</span>
        </div>

        <div ref="dropdown" uk-dropdown="mode: click; pos: bottom-justify;" :uk-toggle="! multiple">
            <ul class="uk-nav uk-dropdown-nav">
                <li v-for="(option, index) in options" :key="index" :class="{ 'uk-active': $value.indexOf(option[optionsValue]) != -1 }">
                    <a href="javascript:void(0)" @click="switchOption(option[optionsValue])">{{ option[optionsLabel] }}</a>
                </li>
            </ul>
        </div>

        <input type="hidden" name="name" :value="$value.join(',')">

    </div>

</div>

</template>
<script>

export default {

    computed: {

        $value: {
            get: function () {
                return this.multiple ? this.value : [this.value];
            },
            set: function (value) {
                var $value = this.multiple ? value : value[0];
                if ( $value != this.value ) this.$emit('input', $value);
            }
        },

        labels: function () {
            return this.getLabels();
        }

    },

    props: {
        value: {
            required: true,
            type: [String, Number, Array]
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
        multiple: {
            default: false,
            type: Boolean
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

    methods: {
        
        getOptions: function () {
            return _.filter(this.options, (option) => {
                return this.$value.indexOf(option[this.optionsValue]) != -1;
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
        },

        switchOption: function (option) {

            var $value = this.$value;

            if ( this.multiple ) {
                $value = _.xor($value, [option]);
            }

            if ( ! this.multiple ) {
                $value = [option];
            }

            this.$value = $value;
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-form-select', this.default);
}

</script>
