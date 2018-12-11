
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import lodash from 'lodash';
window._ = window.lodash = lodash;

require('./lodash');

import Axios from 'axios';
window.Axios = Axios;

import Vue from 'vue';
window.Vue = Vue;

import UIkit from 'uikit';
window.UIkit = UIkit;

import FontAwesome from '../icons/font-awesome';
UIkit.icon.add(FontAwesome);

import Liro from './liro/liro';
window.Liro = Liro;

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

Liro.events.watch('axios.load', function () {
    clearTimeout(window.$busy);
    $('body').addClass('is-busy');
});

Liro.events.watch('axios.done', function () {
    window.$busy = setTimeout(() => $('body').removeClass('is-busy'), 100);
});

Liro.events.watch('axios.error', function () {
    window.$busy = setTimeout(() => $('body').removeClass('is-busy'), 100);
});

window.setHeight = function (selector, height) {
    $(selector).height(height);
}

require('./app/app');
