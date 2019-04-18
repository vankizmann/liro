import { set, get, assign, has, merge, difference, clone, isEqual, isString, isPlainObject } from "lodash";
import Event from "./event";

declare var _ : any;

export function extractKey (key) {
    return isString(key) ? key : key[0];
}

export abstract class Data
{
    public static data : any = {};

    public static has (input : any)
    {
        return has(this.data, extractKey(input));
    }

    public static set (input : any, value : any)
    {
        let copy = clone(value);
        let key = extractKey(input);

        if ( isPlainObject(value) ) {
            copy = assign({}, value);
        }

        if ( isEqual(this.data[key], copy) ) {
            return;
        }

        set(this.data, key, copy);

        Event.fire('store:' + key, copy, key);
    }


    public static get (input : any, fallback : any = null)
    {
        let key = extractKey(input);

        if ( _.has(this.data, key) === false ) {
            return fallback;
        }

        let value = _.get(this.data, key, fallback);

        if ( ! _.isPlainObject(value) ) {
            return value;
        }

        return clone(value);
    }

    public static find (input: any, value : any, fallback : any = null)
    {
        let key = extractKey(input);

        if ( _.has(this.data, key) === false ) {
            return fallback;
        }

        if ( _.has(value, 'id') === false  ) {
            return fallback;
        }

        let index = _.findIndex(this.get(key), {
            id: parseInt(value.id)
        });

        if ( index === -1 ) {
            return fallback;
        }

        return this.get(key + '.' + index);
    }

    public static replace (input : any, value : any)
    {
        let key = extractKey(input);

        if ( _.has(this.data, key) === false ) {
            return;
        }

        if ( _.has(value, 'id') === false  ) {
            return;
        }

        let index = _.findIndex(this.get(key), {
            id: parseInt(value.id)
        });

        if ( index === -1 ) {
            return;
        }

        this.set(key + '.' + index, value);
    }

    public static add (input : any, ...args : any)
    {
        this.set(input, _.merge(this.get(input, []), args));
    }

    public static remove (input, ...args)
    {
        this.set(input, _.difference(this.get(input, []), args));
    }

}

export default Data;
