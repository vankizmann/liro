<template>
    <li :class="{ 'nav__item col--flex-auto grid grid--row grid--middle': true, 'nav__item--current': current, 'nav__item--active': active, ['nav__item--' + size]: true }">
        <slot></slot>
    </li>
</template>
<script>
    export default {
        props: {
            size: {
                default: 'medium',
                type: String
            },
            active: {
                default: false,
                type: Boolean
            },
            current: {
                default: false,
                type: Boolean
            }
        }
    }
</script>
