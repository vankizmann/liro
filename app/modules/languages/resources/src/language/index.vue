<template>

<app-list class="liro-language-index" v-model="$root.languages" database="languages.language.index">
    <div slot-scope="{ items, pages, config, order, search, paginate, filter }">

        <portal to="app-toolbar">
            <div class="uk-navbar-item">
                <a class="uk-button uk-button-primary" :href="Liro.routes.get('liro-languages.language.create')">
                    {{ Liro.messages.get('liro-languages::module.language.create') }}
                </a>
            </div>
        </portal>

        <!-- Table start -->
        <div class="th-table-container">
            <div class="th-table uk-margin-remove-bottom">

                <!-- Table head -->
                <div class="th-table-head">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-margin-auto-left">
                            <app-list-search
                                :columns="['title', 'locale']" :config="config.search" @search="search"
                                :placeholder="Liro.messages.get('theme::form.search.placeholder')"
                            ></app-list-search>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="th-table-filter">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width-1-2">
                            <app-list-sort column="title" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-languages::form.language.title') }}
                            </app-list-sort>
                        </div>
                        <div class="uk-width-1-2">
                            <app-list-sort column="locale" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-languages::form.language.locale') }}
                            </app-list-sort>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="default" :config="config.filter" :filters="$root.defaults" @filter="filter">
                                {{ Liro.messages.get('liro-languages::form.language.default') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-filter column="state" :config="config.filter" :filters="$root.states" @filter="filter">
                                {{ Liro.messages.get('liro-languages::form.language.state') }}
                            </app-list-filter>
                        </div>
                        <div class="th-table-td-m uk-text-center">
                            <app-list-sort column="id" :config="config.order" @order="order">
                                {{ Liro.messages.get('liro-languages::form.language.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length != 0">
                    <liro-language-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-language-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="th-table-body" v-if="items.length == 0">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <div class="uk-width1-1 uk-text-center">
                            {{ Liro.messages.get('theme::form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="th-table-footer">
                    <div class="th-table-tr uk-flex uk-flex-middle">
                        <app-list-pagination :pages="pages" :config="config.paginate" @paginate="paginate"></app-list-pagination>
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

}

if (window.Liro) {
    Liro.vue.component('liro-language-index', this.default);
}

</script>

