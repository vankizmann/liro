<template>

<div class="app-list-sort">
    <!-- Label start -->
    <a href="javascript:void(0)" :class="{ 'uk-text-nowrap': true, 'uk-active': column == config.column }" @click="setOrder">
        <i :uk-icon="icon"></i> <span v-if="$slots.default"><slot></slot></span>
    </a>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    /**
     * Computed properties
     */
    computed: {
        icon() {
            return this.config.direction == 'asc' ? 'triangle-up' : 'triangle-down';
        }
    },

    /**
     * Changable properties
     */
    props: {

        config: {
            default() {
                return {
                    column: 'id', direction: 'desc'
                };
            },
            type: Object
        },

        column: {
            default: '',
            type: String
        },

        label: {
            default: '',
            type: String
        },

        reverse: {
            default: false,
            type: Boolean
        }

    },

    /**
     * Component methods
     */
    methods: {

        setOrder() {
            this.$emit('order', this.column, this.config.direction == 'desc' ? 'asc' : 'desc');
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-sort', this.default);
}

</script>
