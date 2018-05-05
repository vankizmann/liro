<template>
    <div :class="{ 'app-list-check': true }">
        <a href="#">
            <slot></slot>
        </a>
        <div uk-dropdown="mode: click;">
            <label v-for="(filter, index) in filters" :key="index" class="uk-display-block">
                <input type="checkbox" class="uk-checkbox" :value="filter[filtersIndex]" v-model="checked"> <span>{{ filter[filtersLabel] }}</span>
            </label>
            <div class="uk-text-right">
                <a href="#" @click.prevent="checked = []">{{ $t('Reset')}}</a>
            </div>
        </div>
        
    </div>
</template>
<script>
    module.exports = {
        name: 'app-list-filter-filter',
        props: {
            column: {
                default: '',
                type: String
            },
            display: {
                default: '',
                type: String
            },
            label: {
                default: '',
                type: String
            },
            filters: {
                type: Array
            },
            filtersIndex: {
                default: 'id',
                type: String
            },
            filtersLabel: {
                default: 'title',
                type: String
            },
            
        },
        data() {
            return {
                checked: []
            };
        },
        watch: {
            checked() {
                this.$store.commit('list/filter', [this.column + '.' + this.filtersIndex, this.checked]);
            }
        }
    }
    liro.component(module.exports);
</script>
