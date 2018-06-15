
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

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.collect = require('collect.js');


/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.UIkit = require('uikit');

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.JSONStorage = require('jsonstorage/storage.js');

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.Fuzzy = require('fuzzy-search');

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.liro = require('./liro/index.js');

/**
 * We'll load the collect.js which can help us handle collections
 * like laravel does. Has handy functions like find, map and so on.
 */

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

window.axios.interceptors.request.use(
    function (request) {
        window.liro.event.$emit('axios.load');
        return request;
    },
    function (error) {
        window.liro.event.$emit('axios.error');
        return Promise.reject(error);
    }
);

window.axios.interceptors.response.use(
    function (response) {
        window.liro.event.$emit('axios.done');
        return response;
    },
    function (error) {
        window.liro.event.$emit('axios.error');
        return Promise.reject(error);
    }
);
