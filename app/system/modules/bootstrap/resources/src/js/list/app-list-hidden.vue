<template>
    <div :class="{ 'app-list-hidden': true, 'uk-active': active }">
        <a v-if="href" :href="href" :class="['fa', icon]"></a>
        <span v-else :class="['fa', icon]"></span>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-hidden',
        props: {
            icon: {
                default: 'fa-eye-slash',
                type: String
            },
            href: {
                default: '',
                type: String
            },
            active: {
                default: false,
                type: Boolean
            }
        }
    }
    liro.component(module.exports);
</script>
