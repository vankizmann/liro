<template>

<div class="app-form-switch">

    <!-- Label start -->
    <label v-show="label" class="uk-form-label" :for="id">
        <span v-html="label"></span>
    </label>
    <!-- Label end -->

    <div class="uk-form-controls">

        <ul class="uk-nav" :data-value="$value">
            <li v-for="(option, index) in options" :key="index" :class="{ 'uk-active': $value == option[optionsValue] }">
                <a href="javascript:void(0)" @click="switchOption(option[optionsValue])">{{ option[optionsLabel] }}</a>
            </li>
        </ul>

        <input type="hidden" name="name" :value="$value">

    </div>

</div>

</template>
<script>

export default {

    computed: {

        $value: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                if ( value != this.value ) this.$emit('input', value);
            }
        },

        labels: function () {
            return this.getLabels();
        }

    },

    props: {
        value: {
            required: true,
            type: [String, Number]
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
                return this.$value == option[this.optionsValue];
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

        switchOption: function (value) {
            this.$value = value;
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-form-switch', this.default);
}

</script>
