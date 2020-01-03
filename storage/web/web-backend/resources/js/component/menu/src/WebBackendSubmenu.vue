<template>
    <RouterLink :to="{ name: value.id }" :exact="!value.slug" v-slot="{ href, navigate, isActive, isExactActive }">
        <li :class="['col--flex-0', 'link', (isActive || isRedirect) && 'link--active', isExactActive && 'link--exact-active']">
            <a :href="href" @click="navigate">
                {{ trans(value.title) }}
            </a>
        </li>
    </RouterLink>
</template>
<script>
    export default {

        name: 'WebBackendSubmenu',

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
