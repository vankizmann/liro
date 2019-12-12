import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import Axios from 'axios';
window.axios = Axios;

import Nano from 'nano-js';
window.Nano = Nano;

require('./app/index');

Nano.Dom.ready(() => {
    console.log('web-backend ready.', window.Menu);
});

