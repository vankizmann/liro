<template>

<div class="app-list-sort">
    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': column == config.order.column }" @click="setOrder">
        <i :uk-icon="this.config.order.direction == 'asc' ? 'sort-amount-up' : 'sort-amount-down'"></i> <span v-if="$slots.default"><slot></slot></span>
    </a>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    inject: [
        'config', 'methods'
    ],

    props: {

        config: {
            required: true,
            type: Object
        },

        column: {
            default: '',
            type: String
        },

        label: {
            default: '',
            type: String
        }

    },

    methods: {

        setOrder() {
            this.methods.order(this.column, this.config.order.direction == 'desc' ? 'asc' : 'desc');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-sort', this.default);
}

</script>
