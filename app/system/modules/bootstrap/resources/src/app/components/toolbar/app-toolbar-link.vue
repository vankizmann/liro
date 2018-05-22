<template>
    <li :class="{ 'uk-toolbar-item': true, 'uk-disabled': disabled }">
        <a class="uk-button uk-button-link" :href="href" :disabled="disabled">
            <i v-if="icon" :class="icon+' uk-margin-small-right'"></i> <slot></slot>
        </a>
    </li>
</template>
<script>
    export default {
        props: {
            icon: {
                default: '',
                type: String
            },
            href: {
                default: '',
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        }
    }
    liro.vue.$component('app-toolbar-link', this.default);
</script>
