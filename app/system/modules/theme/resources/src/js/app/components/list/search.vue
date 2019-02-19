<template>

<div class="app-list__search">
    <!-- Input start -->
    <div class="uk-inline uk-width-medium">
        <el-input v-model="query" @change="setQuery(query)" :placeholder="placeholder"></el-input>
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
                return '';
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
