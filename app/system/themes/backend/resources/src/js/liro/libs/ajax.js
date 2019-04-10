import { isString } from "lodash";
import { Storage } from "../index";

export default function () {

    this.apis = {};

    let getKey = function (input) {
        return isString(input) ? input : input[0];
    };

    let getStore = function (input) {
        return isString(input) ? input : input[1] || getKey(input)
    };

    this.has = (input) => {
        return this.apis[getKey(input)] !== undefined;
    };

    this.bind = (input, api) => {
        this.apis[getKey(input)] = api;
    };

    this.call = (input, vars) => {
        return new Promise((resolve, reject) => {
            return this.apis[getKey(input)](vars).then((res) => {
                Storage.set(getStore(input), res.data); resolve(res);
            }, reject);
        });
    };

}
