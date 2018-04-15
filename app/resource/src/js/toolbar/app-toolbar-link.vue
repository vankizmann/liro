<template>
    <li class="uk-toolbar-item">
        <a class="uk-button uk-button-primary" :href="href">
            <i v-if="icon" :class="icon+' uk-margin-small-right'"></i> <slot></slot>
        </a>
    </li>
</template>
<script>
    module.exports = {
        name: 'app-toolbar-link',
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
    liro.component(module.exports);
</script>
