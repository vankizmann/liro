<template>
    <li :class="{ 'uk-toolbar--action': true, 'uk-disabled': disabled }">
        <a :href="href">
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
