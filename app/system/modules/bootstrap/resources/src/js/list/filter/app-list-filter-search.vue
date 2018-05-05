<template>
    <div class="app-list-filter-search">
        <label v-if="label" for="list-filter-search" class="uk-form-label" v-html="label"></label>
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" @click.prevent="search = ''">
                <i class="fa fa-times"></i>
            </a>
            <input id="list-filter-search" class="uk-input" type="search" v-model="search" :placeholder="placeholder">
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-filter-search',
        computed: {
            search: {
                get() {
                    return this.$store.getters['list/search'];
                },
                set(value) {
                    this.$store.commit('list/search', [value, this.column.split(',')]);
                }
            }
        },
        props: {
            placeholder: {
                defaukt: '',
                type: String
            },
            label: {
                default: '',
                type: String
            },
            column: {
                default: '',
                type: String
            }
        }
    }
    liro.component(module.exports);
</script>
