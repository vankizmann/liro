<template>

<div class="app-list-sort">
    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': column == config.column }" @click="setOrder">
        <i :uk-icon="config.direction == 'asc' ? 'sort-amount-up' : 'sort-amount-down'"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </a>
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
            return this.list.library.config.order;
        }

    },

    props: {

        column: {
            default: function () {
                return '';
            },
            type: String
        },

        label: {
            default: function () {
                return '';
            },
            type: String
        }

    },

    methods: {

        setOrder() {
            this.list.library.setOrderData(this.column, this.config.direction == 'desc' ? 'asc' : 'desc');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-sort', this.default);
}

</script>
