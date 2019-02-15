<template>
        <el-card>
            <p>
                {{ post.body  }}
            </p>
        </el-card>
</template>
<script>

    Liro.Modules.export('app-foobar', this.default = {

        data: function () {
            return {
                ...Liro.Vue.ajax(['foobar', 'post', 'post'], this, 2),
            }
        },

        mounted: function () {
            console.log(this.$route);
        }

    });

</script>