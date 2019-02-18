import Vue from 'vue';

import Ready from './plugins/ready';
Vue.use(Ready);

import Portal from 'portal-vue';
Vue.use(Portal);

import Element from 'element-ui';
Vue.use(Element, { i18n: liro.locales.trans });

import Component from './components/component';
Vue.component('app-component', Component);

import Layout from './components/theme/layout';
Vue.component('theme-layout', Layout);

import NavItem from './components/theme/nav-item';
Vue.component('theme-nav-item', NavItem);

import NavDropdown from './components/theme/nav-dropdown';
Vue.component('theme-nav-dropdown', NavDropdown);

Vue.ready(function () {

    Vue.prototype.http = axios;

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
