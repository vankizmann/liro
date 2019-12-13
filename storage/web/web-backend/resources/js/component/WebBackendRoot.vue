<template>
    <div class="web-backend__root">
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'WebBackendRoot', router: require('../config/router').default
    }
</script>
