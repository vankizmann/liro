<template>
    <div :class="{ 'toolbar--action': true, 'toolbar--action-disabled': disabled }">
        <a :href="href" @click="submitAction">
            <i v-if="icon" :class="icon"></i> <slot></slot>
        </a>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-toolbar-action',
        props: {
            href: {
                default: '',
                type: String
            },
            icon: {
                default: '',
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            submitAction(event) {
                this.$emit('action', event);
            }
        }
    }
    liro.component(module.exports);
</script>
