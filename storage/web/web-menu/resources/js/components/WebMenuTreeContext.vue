<template>
    <NPopover trigger="context">
        <div class="n-select__option">
            <RouterLink :to="{ name: Obj.get(value, 'options.module.edit'), params: { id: value.id } }">
                {{ trans('Edit item') }}
            </RouterLink>
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
