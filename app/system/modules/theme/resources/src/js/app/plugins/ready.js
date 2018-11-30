export default function (Vue) {

    var readyFunction = function (callback) {

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
    
        return ready ? handler() : register(handler);
    }

    Vue.ready = readyFunction;
}