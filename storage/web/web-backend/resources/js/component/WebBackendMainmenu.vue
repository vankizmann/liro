<template>
    <RouterLink :to="{ name: value.id }" :exact="!value.slug" v-slot="{ href, navigate, isActive, isExactActive }">
        <li :class="['col--flex-0', 'link', (isActive || isRedirect) && 'link--active', isExactActive && 'link--exact-active']">
            <a :href="href" @click="navigate">
                <img :src="value.icon" :alt="value.title">
            </a>
            <NPopover type="tooltip" position="right-center">
                {{ value.title }}
            </NPopover>
        </li>
    </RouterLink>
</template>
<script>
    export default {

        name: 'WebBackendMainmenu',

        props: {

            value: {
                type: [Object]
            }

        },

        computed: {

            isRedirect()
            {
                return this.Obj.get(this.value, 'extend.redirect')
                    === this.$route.name;
            }

        }

    }
</script>
