/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import QueryString from 'qs';
window.QueryString = QueryString;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import Cookie from 'js-cookie';
window.Cookie = Cookie;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import Fuzzy from 'fuzzy-search';
window.Fuzzy = Fuzzy;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import List from './libraries/list.js';
window.List = List;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import Undo from './libraries/undo.js';
window.Undo = Undo;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

import LiroFactory from './libraries/liro.js';
window.liro = new LiroFactory;

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.liro.listen('vue.ready', function () {
    window.UIkit.icon.add(ICONS);
});

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.axios.interceptors.request.use(
    function (request) {
        window.liro.trigger('ajax.load');
        return request;
    },
    function (error) {
        window.liro.trigger('ajax.error');
        return Promise.reject(error);
    }
);

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.axios.interceptors.response.use(
    function (response) {
        window.liro.trigger('ajax.done');
        return response;
    },
    function (error) {
        window.liro.trigger('ajax.error');
        return Promise.reject(error);
    }
);
