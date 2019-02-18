<template>
    <el-popover class="nav__popover grid grid--row" placement="bottom-start" transition="fadeDropdown">
        <slot slot="reference"></slot>
        <div class="nav__dropdown--top col--1-1" v-if="$slots['dropdown-top']">
            <slot name="dropdown-top"></slot>
        </div>
        <div class="nav__dropdown--left col--1-2" v-if="$slots['dropdown-left']">
            <ul class="nav__dropdown">
                <slot name="dropdown-left"></slot>
            </ul>
        </div>
        <div class="nav__dropdown--right col--1-2" v-if="$slots['dropdown-right']">
            <ul class="nav__dropdown">
                <slot name="dropdown-right"></slot>
            </ul>
        </div>
    </el-popover>
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
