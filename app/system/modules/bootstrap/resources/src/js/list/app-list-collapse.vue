<template>
    <div :class="{ 'app-list-collapse': true, 'uk-disabled': disabled, 'uk-active': active }">
        <a v-if="active" href="#" :class="['fa', open]" @click="click"></a>
        <a v-else href="#" :class="['fa', closed]" @click="click"></a>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-collapse',
        props: {
            open: {
                default: 'fa-angle-down',
                type: String
            },
            closed: {
                default: 'fa-angle-right',
                type: String
            },
            disabled: {
                default: true,
                type: Boolean
            },
            active: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            click(event) {

                if (this.disabled) {
                    return;
                }

                this.$emit('click', event);
            }
        }
    }
    liro.component(module.exports);
</script>
