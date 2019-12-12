<template>
    <div class="web-dashboard-index">
        <NSelect :multiple="true">
            <NSelectOption v-for="item in Arr.make(8)" :key="item" :value="item">
                {{ `Foobar - ${item}` }}
            </NSelectOption>
        </NSelect>
    </div>
</template>
<script>
    export default {
        name: 'WebDashboardIndex'
    }
</script>
