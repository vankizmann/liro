
<template>
    <router-link class="menu__route" :to="to" :active-class="activeClass" :exact="exact">
        <slot></slot>
    </router-link>
</template>
<script>
    export default {
        props: {
            to: {
                required: true,
                type: [String, Object]
            },
            activeClass: {
                default: 'menu__route--active',
                type: String
            }
        },
        computed: {
            exact: function () {
                return this.to === '/';
            }
        }
    }
</script>