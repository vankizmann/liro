<template>
    <div class="app-list-search">

        <!-- Input start -->
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" @click.prevent="search = ''"><i class="fa fa-times"></i></a>
            <input id="list-filter-search" class="uk-input" type="search" v-model="search" :placeholder="placeholder">
        </div>
        <!-- Input end -->

    </div>
</template>
<script>
    module.exports = {

        /**
         * Component name
         */
        name: 'app-list-search',

        /**
         * Computed properties
         */
        computed: {
            search: {
                get() {
                    return this.$store.getters['list/search'];
                },
                set(value) {
                    this.$store.commit('list/search', { query: value, columns: this.columns });
                }
            }
        },

        /**
         * Changable properties
         */
        props: {
            placeholder: {
                default: '',
                type: String
            },
            columns: {
                default: () => [],
                type: Array
            }
        }

    }
    liro.component(module.exports);
</script>
