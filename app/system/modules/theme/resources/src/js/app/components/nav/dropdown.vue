<template>
    <el-popover popper-class="nav__dropdown" :trigger="trigger" placement="bottom" transition="fadeDropdown" :width="width">
        <slot slot="reference"></slot>
        <slot name="dropdown"></slot>
    </el-popover>
</template>
<script>
    export default {
        props: {
            trigger: {
                default: 'click',
                type: String
            },
            active: {
                default: false,
                type: Boolean
            },
            current: {
                default: false,
                type: Boolean
            },
            width: {
                default: 180,
                type: Number
            }
        }
    }
</script>
