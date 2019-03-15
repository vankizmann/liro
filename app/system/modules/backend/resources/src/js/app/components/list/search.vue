<template>

<div class="app-list__search">
    <!-- Input start -->
    <div class="grid grid--row grid--middle grid--10">
        <div class="col--flex-auto">
            <el-input v-model="query" @input="setQuery(query)" :placeholder="placeholder" :clearable="true"></el-input>
        </div>
    </div>
    <!-- Input end -->
</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.search;
        }

    },

    props: {

        placeholder: {
            default: function () {
                return this.trans('el.search.placeholder');
            },
            type: String
        },

        columns: {
            default: function () {
                return [];
            },
            type: Array
        }

    },

    data: function () {
        return {
            query: this.list.library.config.search.query
        };
    },

    methods: {

        setQuery: function (query) {
            this.list.library.setSearchData(query, this.columns);
        }

    }

}

</script>
