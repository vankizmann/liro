<template>
    <NPopover ref="popover" type="select" trigger="context" position="bottom-start" :width="160">
        <template v-for="link in Obj.get(value, 'options.links')">
            <a class="n-popover-option" href="javascript:void(0)" @click="goto(link.id)">
                {{ link.text }}
            </a>
        </template>
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

            goto(name)
            {
                let params = {
                    id: this.value.id
                };

                this.$router.push({ name, params },
                    () => this.$refs.popover.close());
            }

        }

    }
</script>
