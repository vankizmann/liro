<template>
    <div class="web-dashboard-index">

        <div class="web-body-item">
            <WebBackendTitle :key="$route.name">
                Welcome back!
            </WebBackendTitle>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'WebDashboardIndex'
    }
</script>
