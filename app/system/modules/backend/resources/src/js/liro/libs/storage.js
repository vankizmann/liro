import { assign, merge, difference, clone, isEqual, isString, isPlainObject } from "lodash";
import { Events } from "../index";

export default function () {

    this.storage = window._storage || {};

    let _key = function (input) {
        return isString(input) ? input : input[0];
    };

    this.has = (input) => {
        return this.storage[_key(input)] !== undefined;
    };

    this.set = (input, value) => {

        let copy = value, key = _key(input);

        if ( isPlainObject(value) ) {
            copy = assign({}, value);
        }

        if ( isEqual(this.storage[key], copy) ) {
            return;
        }

        Events.emit('store:' + key, this.storage[key] = copy, key);
    };

    this.get = (input, fallback) => {

        let key = _key(input);

        if ( this.storage[key] === undefined ) {
            return this.storage[key] = {};
        }

        return clone(this.storage[key] || fallback || {});
    };

    this.add = (input, ...args) => {
        this.set(input, merge(this.get(input, []), args));
    };

    this.remove = (input, ...args) => {
        this.set(input, difference(this.get(input, []), args));
    }

}