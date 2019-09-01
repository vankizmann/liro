import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// import lodash from 'lodash';
// window._ = window.lodash = lodash;

// import Velocity from 'velocity-animate';
// window.velocity = Velocity;

import Axios from 'axios';
window.axios = Axios;

import Nano from 'nanojs';
window.nano = Nano;

import Liro from "./liro/index";
Nano.extends(Liro);

require('./config/axios');
require('./app/index');
