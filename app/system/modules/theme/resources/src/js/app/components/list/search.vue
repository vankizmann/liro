<template>

<div class="app-list-search">
    <!-- Input start -->
    <div class="uk-inline uk-width-medium">
        <a class="uk-form-icon uk-form-icon-flip" @click="setQuery('')"><span :uk-icon="'close'"></span></a>
        <input id="list-filter-search" class="uk-input" type="search" v-model="query" @keyup="setQuery(query)" :placeholder="placeholder">
    </div>
    <!-- Input end -->
</div>

</template>
<script>

export default {
    props: {

        config: {
            default: function () {
                return {
                    query: '', columns: []
                };
            },
            type: Object
        },

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
            query: ''
        };
    },

    mounted: function () {
        this.$watch('config', () => this.query = this.config.query || '');
    },

    methods: {

        setQuery: function (query) {
            this.$emit('search', query, this.columns);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-search', this.default);
}

</script>