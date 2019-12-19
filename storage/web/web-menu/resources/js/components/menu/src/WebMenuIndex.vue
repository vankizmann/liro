<template>
    <div class="web-menu-index" :key="$route.name">

        <WebBackendTitle>
            Last updated at bla bla.
        </WebBackendTitle>

        <NTabs>
            <NTabsItem :label="trans('Start')">
                Foo
            </NTabsItem>
            <NTabsItem :label="trans('Test')" name="test">
                Bar
            </NTabsItem>
        </NTabs>

    </div>
</template>
<script>
    export default {
        name: 'WebMenuIndex'
    }
</script>
