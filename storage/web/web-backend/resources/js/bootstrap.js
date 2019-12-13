import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import Axios from 'axios';
window.axios = Axios;

import Nano from 'nano-js';
window.Nano = Nano;

require('./app');

if ( console && console.log ) {
    console.log('web-backend ready.');
}

