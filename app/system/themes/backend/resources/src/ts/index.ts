import { each } from 'lodash';

import cash from 'cash-dom';
(<any> window).$ = cash;

import axios from 'axios';
(<any> window).axios = axios;

import ux from './ux/index';
(<any> window).ux = ux;

import App from './app/index';

axios.interceptors.request.use(
    res => res, res => Promise.reject(res.response)
);

axios.interceptors.response.use(
    res => res, res => Promise.reject(res.response)
);

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

