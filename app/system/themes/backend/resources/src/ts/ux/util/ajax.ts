import { has, isString } from "lodash";
import { extractKey, Data } from "./data";

export function extractStore (key) {
    return isString(key) ? key : key[1] || extractKey(key);
}

export abstract class Ajax
{
    public static apis : any = {};

    public static has (input : any)
    {
        return has(this.apis, extractKey(input));
    };

    public static bind (input, api)
    {
        this.apis[extractKey(input)] = api;
    }

    public static call (input, vars)
    {
        return new Promise((resolve, reject) => {
            return this.apis[extractKey(input)](vars).then((res) => {
                Data.set(extractStore(input), res.data); resolve(res);
            }, reject);
        });
    };
}

export default Ajax;
