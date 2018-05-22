<template>
    <li :class="{ 'uk-toolbar-item': true, 'uk-disabled': disabled }">
        <button class="uk-button uk-button-link" @click.prevent="clickEvent" :disabled="disabled">
            <i v-if="icon" :class="icon+' uk-margin-small-right'"></i> <slot></slot>
        </button>
    </li>
</template>
<script>
    export default {
        props: {
            icon: {
                default: '',
                type: String
            },
            event: {
                default: '',
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            clickEvent() {
                if ( ! this.disabled && this.event ) {
                    this.$liro.event.$emit(this.event);
                }
            }
        }
    }
    liro.vue.$component('app-toolbar-event', this.default);
</script>
