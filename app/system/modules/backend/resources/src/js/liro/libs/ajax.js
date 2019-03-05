import { isString } from "lodash";
import { Storage } from "../index";

export default function () {

    this.apis = {};

    let _key = function (input) {
        return isString(input) ? input : input[0];
    };

    let _store = function (input) {
        return isString(input) ? input : input[1] || _key(input)
    };

    this.has = (input) => {
        return this.apis[_key(input)] !== undefined;
    };

    this.set = (input, api) => {
        this.apis[_key(input)] = api;
    };

    this.index = (input, callback) => {

        let key = _key(input), store = _store(input);

        axios.get(this.apis[key]).then((res) => {

            if ( callback ) {
                callback(res.data);
            }

            Storage.set(store, res.data);
        });
    };

    this.show = (input, id, callback) => {

        let key = _key(input), store = _store(input);

        axios.get(this.apis[key] + '/' + id).then((res) => {

            if ( callback ) {
                callback(res.data);
            }

            Storage.set(store, res.data);
        });
    };

}
