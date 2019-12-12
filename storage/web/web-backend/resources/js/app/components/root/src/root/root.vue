<template>
    <div class="root">
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'WebRoot', router: require('../router').default,
    }
</script>
