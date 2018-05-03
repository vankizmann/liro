<template>
    <div :class="{ 'app-list-state': true, 'uk-active': active }">
        <a v-if="href" :href="href" :class="{'fa': icon != '', icon: icon != '' }"></a>
        <span v-else :class="{'fa': icon != '', icon: icon != '' }"></span>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-state',
        props: {
            icon: {
                default: '',
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
