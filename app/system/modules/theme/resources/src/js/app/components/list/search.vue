<template>

<div class="app-list-search">
    <!-- Input start -->
    <div class="uk-inline uk-width-medium">
        <a class="uk-form-icon uk-form-icon-flip" @click="setQuery('')"><span uk-icon="times"></span></a>
        <input id="list-filter-search" class="uk-input" type="search" v-model="query" @keyup="setQuery(query)" :placeholder="placeholder">
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

if (window.Liro) {
    Liro.vue.component('app-list-search', this.default);
}

</script>