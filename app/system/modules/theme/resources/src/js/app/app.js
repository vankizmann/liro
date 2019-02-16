import Element from 'element-ui';
Vue.use(Element);

import Portal from 'portal-vue';
Vue.use(Portal);


import Ready from './plugins/ready';
Vue.use(Ready);

import Component from './components/theme/Component';
import Layout from './components/theme/Layout';
import Menu from './components/theme/Menu';
import MenuItem from './components/theme/MenuItem';
import MenuLink from './components/theme/MenuLink';
import MenuRoute from './components/theme/MenuRoute';
import Axios from "axios";

Vue.ready(function () {

    Vue.prototype.http = window.Axios;

    Vue.prototype.events = window.Liro.Events;
    Vue.prototype.routes = window.Liro.Routes;
    Vue.prototype.store = window.Liro.Storage;

    Vue.prototype.trans = window.Liro.Locales.trans;
    Vue.prototype.choice = window.Liro.Locales.choice;

    Vue.component('th-component', Component);
    Vue.component('th-layout', Layout);
    Vue.component('th-menu', Menu);
    Vue.component('th-menu-item', MenuItem);
    Vue.component('th-menu-link', MenuLink);
    Vue.component('th-menu-route', MenuRoute);

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
