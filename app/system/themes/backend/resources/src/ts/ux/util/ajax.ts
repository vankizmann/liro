import { has, isString } from "lodash";
import { extractKey, Data } from "./data";

declare var _ : any;

export function extractStore (key) {
    return isString(key) ? key : key[1] || extractKey(key);
}

export abstract class Ajax
{
    public static apis :
        any = {};

    public static has (input : any)
    {
        return has(this.apis, extractKey(input));
    };

    public static bind (input : any, api : string)
    {
        this.apis[extractKey(input)] = api;

        return this;
    }

    public static solve(input : any, vars : any = {})
    {
        let handler = (<any> window).axios || (<any> window).Vue.http;

        return this.apis[extractKey(input)](handler, vars);
    }

    public static call (input : any, store : boolean = false, vars : any = {})
    {
        let call = (resolve, reject) => {
            return this.solve(input, vars).then((res) => {

                if ( store === true ) {
                    Data.set(extractStore(input), _.get(res.data, 'data', res.data));
                }

                return resolve(res);
            }, reject);
        };

        return new Promise(call);
    }

}

export default Ajax;
