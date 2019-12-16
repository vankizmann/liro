<template>
    <div class="web-backend__title">
        <div class="web-backend__title-text">
            <h2>{{ title }}</h2>
        </div>
        <div class="web-backend__title-info">
            <slot></slot>
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
                    return this.Obj.get(this.$route, 'meta.menu.title');
                },
                type: [String]
            }

        }

    }
</script>
