<template>
    <div :class="{ 'app-list-filter': true, 'uk-active': checked.length != 0 }">
        
        <!-- Label start -->
        <a href="#">
            <i class="fa fa-check-square"></i> <span><slot></slot></span>
        </a>
        <!-- Label end -->

        <div uk-dropdown="mode: click;">

            <!-- Options start -->
            <label v-for="(filter, index) in filters" :key="index" class="uk-display-block" style="margin-bottom: 3px;">
                <input type="checkbox" class="uk-checkbox" style="margin-right: 4px;" :value="filter[filtersValue]" v-model="checked"> <span>{{ filter[filtersLabel] }}</span>
            </label>
            <!-- Options end -->

            <!-- Reset start -->
            <div class="uk-text-small uk-text-right">
                <a href="#" @click.prevent="checked = []">{{ $t('Reset')}}</a>
            </div>
            <!-- Reset end -->

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
            filtersValue: {
                default: 'value',
                type: String
            },
            filtersLabel: {
                default: 'label',
                type: String
            },
            
        },
        data() {
            return {
                checked: this.$store.getters['list/filter'][this.column] || []
            };
        },
        watch: {
            checked() {
                this.$store.commit('list/filter', [this.column, this.checked]);
            }
        }
    }
    liro.component(module.exports);
</script>
