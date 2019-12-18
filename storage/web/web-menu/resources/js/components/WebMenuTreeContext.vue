<template>
    <NPopover type="select" trigger="context" :width="160">
        <div v-for="link in Obj.get(value, 'options.menu.links')" class="n-select-option">
            <RouterLink :to="{ name: link.id, params: value }">{{ link.text }}</RouterLink>
        </div>
    </NPopover>
</template>
<script>
    export default {

        name: 'WebMenuTreeContext',

        props: {

            value: {
                default()
                {
                    return {};
                },
                type: [Object]
            }

        },

        computed: {

        },

        methods: {

        }

    }
</script>
