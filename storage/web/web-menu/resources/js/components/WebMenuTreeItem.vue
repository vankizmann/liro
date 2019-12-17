<template>
    <div :class="['web-menu__tree-item', ! value.depth && 'web-menu__tree-item--domain']">
        <span class="web-icon"><i :class="typeIcon"></i></span> <span class="web-title">{{ value.title }}</span> <span class="web-count">{{ choice(':count Entries', childLength) }}</span>
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
            },

            typeIcon()
            {
                return this.Obj.get(this.value,
                    'options.icon');
            }

        },

        methods: {


        }

    }
</script>
