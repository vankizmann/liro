<template>

<app-list class="liro-language-index" v-model="languages" database="languages.language.index">
    <div slot-scope="{ items }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="route('liro-languages.admin.language.create')">
                    {{ trans('liro-languages::module.language.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-form is-table">
            <div class="th-table uk-margin-remove-bottom">

                <!-- Table head -->
                <div class="th-table-head">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-margin-auto-left">
                            <app-list-search :columns="['title', 'locale']" :placeholder="trans('theme::form.search.placeholder')"></app-list-search>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="th-table-filter">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="th-table-td th-table-td-xs">
                            <app-list-select-all class="uk-display-inline-block uk-margin-right"></app-list-select-all>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="title">
                                {{ trans('liro-languages::form.language.title') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="locale">
                                {{ trans('liro-languages::form.language.locale') }}
                            </app-list-sort>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="default" :filters="defaults">
                                {{ trans('liro-languages::form.language.default') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :filters="states">
                                {{ trans('liro-languages::form.language.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id">
                                {{ trans('liro-languages::form.language.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length != 0">
                    <liro-language-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-language-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-show="items.length == 0">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width1-1 uk-text-center">
                            {{ trans('theme::form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="th-table-footer">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <app-list-pagination></app-list-pagination>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Table end -->

    </div>
</app-list>

</template>
<script>

import IndexItem from './index/item';

export default {

    computed: {

        defaults: function () {
            return this.$root.defaults;
        },

        states: function () {
            return this.$root.states;
        },

        languages: function () {
            return this.$root.languages;
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-language-index', this.default);
}

</script>

