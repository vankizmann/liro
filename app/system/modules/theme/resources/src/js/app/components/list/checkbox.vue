<template>

<div class="app-list-checkbox">
    <!-- Label start -->
   <input type="checkbox" class="uk-checkbox" :value="item[column]" :checked="config.indexOf(item[column]) != -1" @input="checkItem" :data-shift-group="group">
    <!-- Label end -->
</div>

</template>
<script>

export default {

    props: {

        config: {
            default: function () {
                return [];
            },
            type: Array
        },

        column: {
            default: function () {
                return 'id'
            },
            type: String
        },

        group: {
            default: function () {
                return 'app-list'
            },
            type: String
        },

        item: {
            required: true,
            type: Object
        }

    },

    methods: {
        
        checkItem: function () {
            this.$emit('check',this.item[this.column]);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-checkbox', this.default);
}

</script>
