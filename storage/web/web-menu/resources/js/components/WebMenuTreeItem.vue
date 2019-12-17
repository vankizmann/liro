<template>
    <div :class="['web-menu__tree-item', ! value.depth && 'web-menu__tree-item--domain']">
        <span>{{ value.title }}</span> <span v-if="isDomain">{{ choice(':count Entries', childLength) }}</span>
    </div>
</template>
<script>
    export default {

        name: 'WebMenuTreeItem',

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

            isDomain()
            {
                return ! this.value.depth;
            },

            childLength()
            {
                return Math.abs(this.value.left -
                    this.value.right) - 1;
            }

        },

        methods: {


        }

    }
</script>
