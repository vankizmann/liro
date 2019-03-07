<template>

<div class="app-list-select-all">
    <!-- Label start -->
    <el-checkbox :value="true" v-model="config.all" @input="selectAll">
        <span v-if="label" v-html="label"></span>
    </el-checkbox>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.select;
        }

    },

    props: {

        label: {
            default: function () {
                return '';
            },
            type: String
        }

    },

    methods: {

        selectAll: function (value) {
            this.list.library.allSelectData(value);
        }

    }

}
</script>
