import { get, set, has, each, merge } from 'lodash';

export function pickByCount (splits, count) {

    let splitLength = splits.length;

    if ( splitLength == 3 && count == 0 ) {
        return splits[0];
    }

    if ( splitLength == 3 && count == 1 ) {
        return splits[1];
    }

    if ( splitLength == 3 && count <= 2 ) {
        return splits[2];
    }

    if ( splitLength == 2 && count == 1 ) {
        return splits[0];
    }

    if ( splitLength == 2 && count != 1 ) {
        return splits[1];
    }

    return splits[0];
}

export abstract class Locale
{
    public static locales :
        any = {};

    public static has (key : string)
    {
        return has(Locale.locales, key);
    }

    public static get (key : string, fallback : string = null)
    {
        return get(Locale.locales, key, fallback || key);
    }

    public static set (key : string, value : string)
    {
        set(Locale.locales, key, value);

        return this;
    }

    public static trans (key : string, values : string)
    {
        let message = get(Locale.locales, key, key);

        each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    }

    public static choice (key : any, count : number, values : any)
    {
        let splits = get(Locale.locales, key, key).split('|');

        if ( values.count !== undefined ) {
            values = merge({ count: count }, values || {});
        }

        let message = pickByCount(splits, count || 0);

        each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    }

}

export default Locale;
