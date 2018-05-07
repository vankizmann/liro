/**
 * Global data storage
 */

window.collect = require('collect.js');

/**
 * Lodash filler
 */


window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * 
 */

import QueryString from 'qs';
window.QueryString = QueryString;

import Cookie from 'js-cookie';
window.Cookie = Cookie;

import Search from 'fuzzy-search';
window.Search = Search;

import UIkit from 'uikit';
window.UIkit = UIkit;


/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

import List from './libraries/list.js';
window.List = List;

import Undo from './libraries/undo.js';
window.Undo = Undo;

import LiroFactory from './libraries/liro.js';
window.liro = new LiroFactory;


