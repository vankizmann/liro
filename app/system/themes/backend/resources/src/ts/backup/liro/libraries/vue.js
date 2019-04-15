import { Modules, Storage, Events } from "../index";
import { clone, debounce, isString } from "lodash";

export default function () {

    let getKey = function (input) {
        return isString(input) ? input : input[0];
    };

    let getAlias = function (input) {
        return isString(input) ? input : input[1] || getKey(input)
    };

    this.store = (input) => {
        return {
            [getAlias(input)]: Storage.get(getKey(input))
        };
    };

    this.bind = (input, scope) => {

        scope.$on('hook:mounted', () => {

            scope.$watch(getAlias(input), debounce((value) => {
                Storage.set(getKey(input), value)
            }, 250), { deep: true });

            Events.bind('store:' + getKey(input), (value) => {
                scope.$set(scope, getAlias(input), clone(value));
            });

        });

        return this.store(input);
    };

    this.import = (key) => {
        return (resolve) => Modules.import(key, (data) => resolve(data));
    }

}
