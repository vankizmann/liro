<template>
    <el-card>
        <el-form>
            <el-form-item label="title">
                <el-input v-model="test.title"></el-input>
            </el-form-item>
            <el-form-item label="body">
                <el-input v-model="test.body"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="refresh" type="primary">Refresh</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>

    Liro.Modules.export('app-test', this.default = {

        data: function () {
            return {
                ...Liro.Vue.ajax(['foobar', 'post', 'test'], this, 1),
            }
        },

        methods: {
            refresh: function () {
                Liro.Ajax.show(['foobar', 'post'], _.random(1, 100));
            }
        }

    });

</script>