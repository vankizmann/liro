<template>

<div class="app-list-pagination">

    <div class="grid grid--row">
        <div class="col--flex-0 col--left">
            <el-select size="small" :popper-append-to-body="false" v-model="limit" @change="changeLimit(limit)" style="width: 75px;">
                <el-option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</el-option>
            </el-select>
        </div>
        <div class="col--flex-0 col--right">
            <el-pagination @current-change="changePage" :current-page="config.page" :page-size.sync="limit" layout="prev, pager, next, jumper" :total="config.count" :background="false" />
        </div>
    </div>
    
</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.paginate;
        }

    },

    props: {

        options: {
            default: function () {
                return [10, 25, 50, 100, 250, 500];
            },
            type: Array
        }

    },

    data: function () {
        return {
            limit: this.list.library.config.paginate.limit
        };
    },

    methods: {

        changePage: function (page) {
            this.list.library.setPaginateData(page || this.config.page, this.config.limit);
        },

        changeLimit: function (limit) {
            this.list.library.setPaginateData(1, limit || this.config.limit);
        }

    }
    
}

if (window.Liro) {
    Liro.vue.component('app-list-pagination', this.default);
}

</script>
