
<template>
    <a class="menu__link" :href="href" :target="target">
        <slot></slot>
    </a>
</template>
<script>
    export default {
        props: {
            href: {
                default: 'javascript:void(0)',
                type: String
            },
            target: {
                default: '_self',
                type: String
            }
        }
    }
</script>