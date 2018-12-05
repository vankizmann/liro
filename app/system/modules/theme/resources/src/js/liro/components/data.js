export default function () {

    var Data = this;

    Data.store = _.isPlainObject(window.$data) ? window.$data : {};

    Data.init = function(value) {
        Data.store = value;
    }.bind(this);

    Data.set = function(key, value) {
        Data.store[key] = value;
    }

    Data.get = function(key, fallback) {
        return Data.store[key] || fallback;
    }

    Data.all = function(key, fallback) {
        return Data.store;
    }

    return Data;
}
