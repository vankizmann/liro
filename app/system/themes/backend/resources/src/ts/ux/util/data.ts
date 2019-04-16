import { assign, has, merge, difference, clone, isEqual, isString, isPlainObject } from "lodash";
import Event from "./event";

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

        this.data[key] = copy;

        Event.fire('store:' + key, copy, key);
    }


    public static get (input : any, fallback : any = null)
    {
        let key = extractKey(input);

        if ( this.has(key) === false ) {
            return this.data[key] = {};
        }

        return clone(this.data[key] || fallback || {});
    };

    public static add (input : any, ...args : any)
    {
        this.set(input, merge(this.get(input, []), args));
    }

    public static remove (input, ...args)
    {
        this.set(input, difference(this.get(input, []), args));
    }

}

export default Data;
