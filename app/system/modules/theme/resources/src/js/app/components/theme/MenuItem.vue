<template>
    <li class="menu__item col--flex-auto grid grid--row grid--middle">
        <el-popover class="menu__popover" :disabled="! $slots['dropdown'] && ! $scopedSlots['dropdown']" placement="bottom-start" :width="dropdownWidth" :offset="dropdownOffset" :trigger="dropdownTrigger" transition="fadeDropdown">
            <slot name="dropdown"></slot>
            <slot slot="reference"></slot>
        </el-popover>
    </li>
</template>
<script>
    export default {
        props: {
            active: {
                default: false,
                type: Boolean
            },
            current: {
                default: false,
                type: Boolean
            },
            dropdownTrigger: {
                default: 'hover',
                type: String
            },
            dropdownWidth: {
                default: 150,
                type: Number
            },
            dropdownOffset: {
                default: -20,
                type: Number
            }
        }
    }
</script>