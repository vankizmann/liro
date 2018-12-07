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
        'config', 'methods'
    ],

    props: {

        placeholder: {
            default: '',
            type: String
        },

        columns: {
            required: true,
            type: Array
        }

    },

    data: function () {
        return {
            query: this.config.search.query
        };
    },

    methods: {

        setQuery: function (query) {
            this.methods.search(this.query = query, this.columns);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-search', this.default);
}

</script>