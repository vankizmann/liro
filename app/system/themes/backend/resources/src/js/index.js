import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// import lodash from 'lodash';
// window._ = window.lodash = lodash;

import Velocity from 'velocity-animate';
window.velocity = Velocity;

import Axios from 'axios';
window.axios = Axios;

import Liro from './liro/index';
window.liro = Liro;

Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

require('./app/app');
