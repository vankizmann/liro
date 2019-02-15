<template>
    <div :class="{ 'menu col--flex-none': true, ['menu--' + size]: true }">
        <nav class="menu__nav">
            <ul class="menu__ul grid grid--row grid--middle grid--20">
                <slot></slot>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        props: {
            size: {
                default: 'medium',
                type: String
            }
        }
    }
</script>