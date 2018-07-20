<template>
    <li :class="{ 'app-toolbar-button': true, 'uk-disabled': disabled }">
        <a class="uk-inline-flex uk-flex-middle uk-button" :href="href" :disabled="disabled" @click="(event) => $emit('click', event)">
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
    liro.vue.$component('app-toolbar-button', this.default);
</script>
