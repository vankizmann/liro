<template>

<div class="app-list-select">
    <!-- Label start -->
   <label class="uk-checkbox-label">
       <input type="checkbox" class="uk-checkbox" :value="value" :checked="config.select.selected.indexOf(value) != -1" @input="selectItem">
       <span v-if="label" v-html="label"></span>
    </label>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    props: {

        config: {
            required: true,
            type: Object
        },

        methods: {
            required: true,
            type: Object
        },

        value: {
            required: true,
            type: Number
        },

        label: {
            default: '',
            type: String
        }

    },

    methods: {

        selectItem: function () {
            this.$emit('select',this.value);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-select', this.default);
}

</script>
