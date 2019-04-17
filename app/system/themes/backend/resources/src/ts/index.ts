import { get, each, mapValues } from 'lodash';

import cash from 'cash-dom';
(<any> window).$ = cash;

import axios from 'axios';
(<any> window).axios = axios;

import ux from './ux/index';
(<any> window).ux = ux;

import App from './app/index';
(<any> window).App = App;

axios.interceptors.request.use(
    function (res) {

        App.$set(App, 'load', true);

        return res;
    },
    function (res) {

        let errors = get(res, 'request.data.errors', null);

        if ( errors !== null ) {
            res.request.data.errors = mapValues(errors, error => {
                return error.join(', ');
            });
        }

        let message = get(res, 'request.data.message', null);

        if ( message !== null && errors === null ) {
            App.$message.error(message);
        }

        App.$set(App, 'load', false);

        return Promise.reject(res.request || res);
    }
);

axios.interceptors.response.use(
    function (res) {

        App.$set(App, 'load', false);

        return res;
    },
    function (res) {

        let errors = get(res, 'response.data.errors', null);

        if ( errors !== null ) {
            res.response.data.errors = mapValues(errors, error => {
                return error.join(', ');
            });
        }

        let message = get(res, 'response.data.message', null);

        if ( message !== null && errors === null ) {
            App.$message.error(message);
        }

        App.$set(App, 'load', false);

        return Promise.reject(res.response || res);
    }
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

