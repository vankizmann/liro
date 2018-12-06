<template>

<div class="app-list-select-all">
    <!-- Label start -->
    <label class="uk-checkbox-label">
        <input type="checkbox" class="uk-checkbox" :checked="config.select.all" @input="selectAll">
        <span v-if="label" v-html="label"></span>
    </label>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    inject: [
        'config', 'methods'
    ],

    props: {

        label: {
            default: '',
            type: String
        }

    },

    methods: {

        selectAll: function () {
            this.methods.selectAll(this.config.select.all ? false : true);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-select-all', this.default);
}

</script>
