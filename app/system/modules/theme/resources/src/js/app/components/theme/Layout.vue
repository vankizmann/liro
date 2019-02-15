<template>
    <div class="layout grid grid--col grid--stretch">
        <div v-if="$slots['header'] || $scopedSlots['header']" class="layout__header col--1-1 col--flex-none grid grid--20 grid--row grid--left">
            <slot name="header"></slot>
        </div>
        <div v-if="$slots['toolbar'] || $scopedSlots['toolbar']" class="layout__toolbar col--1-1 col--flex-none grid grid--20 grid--row grid--left">
            <slot name="toolbar"></slot>
        </div>
        <div class="layout__content col--1-1 col--flex-1">
            <slot></slot>
        </div>
        <div v-if="$slots['footer'] || $scopedSlots['footer']" class="layout__footer col--1-1 col--flex-none grid grid--20 grid--row grid--left">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {}
</script>