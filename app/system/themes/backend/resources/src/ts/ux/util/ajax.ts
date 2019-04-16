import { has, isString } from "lodash";
import { extractKey, Data } from "./data";

export function extractStore (key) {
    console.log(key, isString(key) ? key : key[1] || extractKey(key));
    return isString(key) ? key : key[1] || extractKey(key);
}

export abstract class Ajax
{
    public static apis :
        any = {};

    public static handler :
        any = null;

    public static getHandler()
    {
        return this.handler || (<any> window).axios || (<any> window).Vue.http;
    }

    public static has (input : any)
    {
        return has(this.apis, extractKey(input));
    };

    public static bind (input : any, api : string)
    {
        this.apis[extractKey(input)] = api;

        return this;
    }

    public static call (input : any, vars : any = {})
    {
        return new Promise((resolve, reject) => {
            return this.apis[extractKey(input)](this.getHandler(), vars)
                .then((res) => {
                    Data.set(extractStore(input), res.data); resolve(res);
                }, reject);
        });
    };
}

export default Ajax;
