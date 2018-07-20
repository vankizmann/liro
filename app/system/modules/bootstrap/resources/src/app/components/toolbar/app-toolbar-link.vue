<template>
    <li :class="{ 'app-toolbar-item': true, 'uk-disabled': disabled }">
        <a class="uk-flex uk-flex-middle uk-button" :href="href" :disabled="disabled">
            <span v-if="icon" class="uk-margin-small-right" :uk-icon="icon"></span> <slot></slot>
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
