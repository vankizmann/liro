import { each, flatMap } from "lodash";

export default function () {

    this.routes = window._routes || {};

    this.set = (key, value) => {
        this.routes[key] = value;
    };

    this.get = (key, values, params) => {

        let route = key.match(/^https?:\/\//) ? key : this.routes[key] || '';

        each(values, (value, key) => {
            route = route.replace(new RegExp('{' + key + '\\?*}', 'g'), value);
        });

        let query = flatMap(params || {}, (value, key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });

        return route + (query.length != 0 ? '?' + query.join('&') : '');
    };

    this.goto = (key, values, params) => {
        window.location.href = this.get(key, values, params);
    };

}