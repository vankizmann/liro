import { each, isEmpty, flatMap } from 'lodash';

declare var $ : any;

export default abstract class Route
{
    public static routes : any = {};

    public static set (key : string, value : any)
    {
        this.routes[key] = value;
    }

    public static get (key : string, values : any = null, params : any = null)
    {
        let route = key.match(/^https?:\/\//) ? key : this.routes[key] || '';

        each(values || {}, (value, key) => {
            route = route.replace(new RegExp('{' + key + '\\?*}', 'g'), value);
        });

        return route + (! isEmpty(params) ? '?' + $.param(params || {}) : '');
    }

    public static goto (key : string, values : any = null, params : any = null)
    {
        window.location.href = this.get(key, values, params);
    }

}
