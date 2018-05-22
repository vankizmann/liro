
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

/**
 * We'll load lodash. This code may be modified to 
 * fit the specific needs of your application.
 */

window._ = require('lodash');


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
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.collect = require('collect.js');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */


/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.UIkit = require('uikit');

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.liro = require('./liro/index.js');
