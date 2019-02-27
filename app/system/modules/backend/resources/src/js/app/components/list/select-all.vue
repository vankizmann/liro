<template>

<div class="app-list-select-all">
    <!-- Label start -->
    <label class="uk-checkbox-label">
        <input type="checkbox" class="uk-checkbox" :checked="config.all" @input="selectAll">
        <span v-if="label" v-html="label"></span>
    </label>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.select;
        }

    },

    props: {

        label: {
            default: function () {
                return '';
            },
            type: String
        }

    },

    methods: {

        selectAll: function () {
            this.list.library.allSelectData(this.config.all ? false : true);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-select-all', this.default);
}

</script>
