<template>

<div class="app-list-checkbox">
    <!-- Label start -->
   <input type="checkbox" class="uk-checkbox" :value="value" :checked="config.selected.indexOf(value) != -1" @input="checkItem" :data-shift-group="group">
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

        value: {
            required: true,
            type: Number
        },

        group: {
            default: 'app-list',
            type: String
        }

    },

    methods: {

        checkItem: function () {
            this.$emit('select',this.value);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-checkbox', this.default);
}

</script>
