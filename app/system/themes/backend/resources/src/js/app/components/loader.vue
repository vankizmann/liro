<template>
    <div class="loader">

        <template v-if="load === false">
            <slot></slot>
        </template>

        <template v-if="load === true">
            <div class="loader__container">
                <div class="loader__spinner">
                    <span></span>
                </div>
                <div class="loader__text">
                    <span v-html="text"></span>
                </div>
            </div>
        </template>

    </div>
</template>
<script>
    export default {

        props: {

            load: {
                required: true,
                type: Boolean
            },

            text: {
                default: function () {
                    return this.trans('el.loader.text');
                },
                type: String
            }

        }

    }
</script>
