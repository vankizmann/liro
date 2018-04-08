<template>
    <div class="test-component">
        <el-input v-model="content"></el-input>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-test',
        data() {
            return {
                content: '',
            }
        }
    }
    liro.component(module.exports);
</script>
