import { each, flatMap } from 'lodash';

export default abstract class Route
{
    public static routes : any = {};

    public static set (key : string, value : any)
    {
        this.routes[key] = value;
    }

    public static get (key : string, values : any, params : any)
    {
        let route = key.match(/^https?:\/\//) ? key : this.routes[key] || '';

        each(values, (value, key) => {
            route = route.replace(new RegExp('{' + key + '\\?*}', 'g'), value);
        });

        let query = flatMap(params || {}, (value, key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });

        return route + (query.length != 0 ? '?' + query.join('&') : '');
    }

    public static goto (key : string, values : any, params : any)
    {
        window.location.href = this.get(key, values, params);
    }

}
