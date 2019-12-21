<template>
    <div class="web-backend-title">
        <div class="grid grid--row grid--middle grid--20">
            <div class="col--flex-1">

                <div class="web-backend-title__text">
                    <slot name="title">
                        <h2>{{ title }}</h2>
                    </slot>
                </div>

                <div class="web-backend-title__info" v-if="$slots.default">
                    <slot name="default"></slot>
                </div>

            </div>
            <div class="col--flex-0" v-if="$slots.action">
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        name: 'WebBackendTitle',

        props: {

            title: {
                default()
                {
                    return this.Obj.get(this.$route,
                        'meta.menu.title');
                },
                type: [String]
            }

        }

    }
</script>
