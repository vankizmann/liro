<template>
    <div class="app-list-search">

        <!-- Input start -->
        <div class="uk-inline" style="display: block;">
            <a class="uk-form-icon uk-form-icon-flip" @click.prevent="query = ''"><span :uk-icon="'close'"></span></a>
            <input id="list-filter-search" class="uk-input" type="search" v-model="query" :placeholder="placeholder">
        </div>
        <!-- Input end -->

    </div>
</template>
<script>
    export default {

        props: {

            config: {
                default() {
                    return {
                        query: '', columns: []
                    };
                },
                type: Object
            },

            placeholder: {
                default() {
                    return '';
                },
                type: String
            },

            columns: {
                default() {
                    return [];
                },
                type: Array
            }

        },

        data() {
            return {
                query: ''
            };
        },

        mounted() {

            this.$watch('config', () => {
                this.query = this.config.query || '';
            });

            this.$watch('query', _.debounce(() => {
                this.$emit('search', this.query, this.columns);
            }, 300));

        }

    }
    liro.vue.$component('app-list-search', this.default);
</script>
