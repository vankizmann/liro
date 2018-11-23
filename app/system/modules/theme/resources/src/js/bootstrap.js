
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import lodash from 'lodash';
window._ = window.lodash = lodash;

import Axios from 'axios';
window.Axios = Axios;

import Vue from 'vue';
window.Vue = Vue;

import UIkit from 'uikit';
window.UIkit = UIkit;

import Liro from './liro/liro';
window.Liro = Liro;

import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

Axios.interceptors.request.use(
    function (request) {
        Liro.events.emit('axios.load', request);
        return request;
    },
    function (error) {
        Liro.events.emit('axios.error', error.response);
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    function (response) {
        Liro.events.emit('axios.done', response);
        return response;
    },
    function (error) {
        Liro.events.emit('axios.error', error.response);
        return Promise.reject(error);
    }
);

require('./app/app');
