var ready = function (callback) {

    var ready = document.readyState == 'complete';

    var register = function (callback) {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    }

    var destroy = function (callback) {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    }

    var handler = function () {
        destroy(handler);
        callback();
    };

    var binder = function () {
        register(handler);
    };

    return ready ? handler() : binder();
}

if (window.Vue) {
    Vue.ready = ready;
}

require('./app/index.js');
