import Vue from 'vue';

import Ready from './plugins/ready';
Vue.use(Ready);

import Portal from 'portal-vue';
Vue.use(Portal);

import Shortkey from 'vue-shortkey';
Vue.use(Shortkey);

import Element from 'element-ui';
Vue.use(Element, { i18n: liro.locales.trans });

import Component from './components/component';
Vue.component('app-component', Component);

import Loader from './components/loader';
Vue.component('app-loader', Loader);

import Layout from './components/layout';
Vue.component('app-layout', Layout);

import NavItem from './components/nav/item';
Vue.component('app-nav-item', NavItem);

import NavDropdown from './components/nav/dropdown';
Vue.component('app-nav-dropdown', NavDropdown);

import NavLink from './components/nav/link';
Vue.component('app-nav-link', NavLink);

import List from './components/list';
Vue.component('app-list', List);

import ListSearch from './components/list/search';
Vue.component('app-list-search', ListSearch);

import ListSort from './components/list/sort';
Vue.component('app-list-sort', ListSort);

import ListFilter from './components/list/filter';
Vue.component('app-list-filter', ListFilter);

import ListSelect from './components/list/select';
Vue.component('app-list-select', ListSelect);

import ListSelectAll from './components/list/select-all';
Vue.component('app-list-select-all', ListSelectAll);

import ListPagination from './components/list/pagination';
Vue.component('app-list-pagination', ListPagination);

import ListBuilder from './components/list-builder';
Vue.component('app-list-builder', ListBuilder);

Vue.ready(function () {

    Vue.prototype.http = axios;
    Vue.prototype.liro = liro;

    Vue.prototype.events = liro.events;
    Vue.prototype.routes = liro.routes;
    Vue.prototype.storage = liro.storage;

    Vue.prototype.trans = liro.locales.trans;
    Vue.prototype.choice = liro.locales.choice;

    Vue.prototype.empty = function (obj) {
        return Object.keys(obj).length === 0;
    };

    window.App = new Vue({

        mounted: function () {

            this.http.interceptors.request.use(
                this.onRequest, this.onError
            );

            this.http.interceptors.response.use(
                this.onResponse, this.onError
            );

        },

        methods: {

            onRequest: function (req) {
                return req;
            },

            onResponse: function (res) {

                if ( res.data.message !== undefined) {
                    this.$message.success(res.data.message);
                }

                return res;
            },

            onError: function (err) {

                let res = err.response;

                if ( res.status !== 422) {
                    this.$message.error(res.data.message);
                }

                $.map(res.data.errors || {}, (value, key) => {
                    res.data.errors[key] = value.join(',');
                });

                return Promise.reject(res);
            }

        }

    }).$mount('#app');


});
