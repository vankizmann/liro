import Vue from 'vue';

import Ready from './plugins/ready';
Vue.use(Ready);

import Portal from 'portal-vue';
Vue.use(Portal);

import Element from 'element-ui';
Vue.use(Element, { i18n: liro.locales.trans });

import Component from './components/component';
Vue.component('app-component', Component);

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

Vue.ready(function () {

    Vue.prototype.http = axios;
    Vue.prototype.liro = liro;

    Vue.prototype.events = liro.events;
    Vue.prototype.routes = liro.routes;
    Vue.prototype.storage = liro.storage;

    Vue.prototype.trans = liro.locales.trans;
    Vue.prototype.choice = liro.locales.choice;

    window.App = new Vue({

        mounted: function () {

            this.http.interceptors.request.use(
                this.__request, this.__error
            );

            this.http.interceptors.response.use(
                this.__response, this.__error
            );

        },

        methods: {

            __request: function (request) {
                return request;
            },

            __response: function (response) {

                if ( response.data.message !== undefined) {
                    this.$message.success(response.data.message);
                }

                return response;
            },

            __error: function (error) {

                let response = error.response;

                if ( response.status !== 422) {
                    this.$message.error(response.data.message);
                }

                $.map(response.data.errors || {}, (value, key) => {
                    response.data.errors[key] = value.join(',');
                });

                return Promise.reject(response);
            }

        }

    }).$mount('#app');


});
