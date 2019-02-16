import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import lodash from 'lodash';
window._ = window.lodash = lodash;

import Vue from 'vue';
window.Vue = Vue;

import Axios from 'axios';
window.Axios = Axios;

import Liro from './liro/index';
window.Liro = Liro;

Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

require('./app/app');
