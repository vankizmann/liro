<template>
    <RouterLink :to="{ name: value.id }" :exact="!value.slug" v-slot="{ href, navigate, isActive, isExactActive }">
        <li :class="['link', isActive && 'link--active', isExactActive && 'link--exact-active']">
            <a :href="href" @click="navigate">
                <span>{{ value.title }}</span>
            </a>
            <ul v-if="value.children && value.children.length">
                <WebBackendMenu v-for="menu in menus" :key="menu.id" :value="menu" />
            </ul>
        </li>
    </RouterLink>
</template>
<script>
    export default {

        name: 'WebBackendMenu',

        props: {

            value: {
                type: [Object]
            }

        },

        computed: {

            menus()
            {
                return this.value.children.filter(menu => menu.hide === 0);
            }

        }

    }
</script>
