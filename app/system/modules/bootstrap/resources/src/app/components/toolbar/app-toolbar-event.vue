<template>
    <li :class="{ 'app-toolbar-item': true, 'uk-disabled': disabled }">
        <button class="uk-flex uk-flex-middle uk-button" @click.prevent="clickEvent" :disabled="disabled">
            <span v-if="icon" class="uk-margin-small-right" :uk-icon="icon"></span> <slot></slot>
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
