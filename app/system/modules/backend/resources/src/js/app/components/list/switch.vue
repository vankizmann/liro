<template>

<div class="app-list-switch" :class="{ 'uk-active': active }">
    <!-- Label start -->
    <a href="javascript:void(0)" :uk-icon="icon" @click="click"></a>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    props: {

        icon: {
            default: '',
            type: String
        },

        active: {
            default: false,
            type: [Boolean, Number]
        }

    },

    methods: {

        click: function (event) {
            this.$emit('click', event);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-switch', this.default);
}

</script>
