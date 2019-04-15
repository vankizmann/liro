import { each } from 'lodash';

import cash from 'cash-dom';
(<any> window).$ = cash;

import ux from './ux/index';
(<any> window).ux = ux;

import App from './app/index';

ux.dom.ready(() => {

    let queue = new ux.queue();

    queue
        .add((done) => {
            ux.ext.load('liro-menus', done);
        })
        .add((done) => {
            ux.ext.load('liro-users', done);
        })
        .add((done) => {
            App.$mount('#app');
            done();
        });

    queue.run();
});

// require('./liro/index');

// require('./app/index');

