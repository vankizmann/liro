import { each } from 'lodash';

import cash from 'cash-dom';
(<any> window).$ = cash;

import ux from './ux/index';
(<any> window).ux = ux;

import App from './app/index';

declare const dom : any;

dom.ready(() => {
    App.$mount('#app');
});

// require('./liro/index');

// require('./app/index');

