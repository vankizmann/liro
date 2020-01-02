<template>
    <div class="web-backend-title">
        <div class="grid grid--row grid--middle grid--20">
            <div class="web-backend-title__goto col--flex-0" v-if="$slots.goto || Any.isFunction(goto)">
                <slot name="goto">
                    <NButton size="large" :link="true" :square="true" :icon="gotoIcon" @click="goto" />
                </slot>
            </div>
            <div class="col--flex-1">

                <div class="web-backend-title__text">
                    <slot name="title">
                        <h2>{{ title }}</h2>
                    </slot>
                </div>

                <div class="web-backend-title__info" v-if="$slots.info || ! Any.isEmpty(info)">
                    <slot name="info">
                        <span>{{ info }}</span>
                    </slot>
                </div>

            </div>
            <div class="web-backend-title__actions col--flex-0" v-if="$slots.default">
                <slot name="default"></slot>
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
            },

            info: {
                default()
                {
                    return '';
                },
                type: [String]
            },

            goto: {
                default()
                {
                    return null;
                }
            },

            gotoIcon: {
                default()
                {
                    return this.icons.arrowLeft;
                }
            }

        }

    }
</script>
