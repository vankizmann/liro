import { Modules, Storage, Ajax, Events } from "../index";
import { clone, debounce, isString } from "lodash";

export default function () {

    let _key = function (input) {
        return isString(input) ? input : input[0];
    };

    let _alias = function (input) {
        return isString(input) ? input : input[1] || _key(input)
    };

    this.store = (input) => {

        let key = _key(input), alias = _alias(input);

        return {
            [alias]: Storage.get(key)
        };
    };

    this.bind = (input, scope) => {

        let key = _key(input), alias = _alias(input);

        scope.$on('hook:mounted', () => {

            scope.$watch(alias, debounce((value) => {
                Storage.set(key, value)
            }, 250), { deep: true });

            Events.bind('store:' + key, (value) => {
                scope.$set(scope, alias, clone(value));
            });

        });

        return this.store(input);
    };

    this.ajax = (input, scope, id) => {

        let store = _alias(input);

        if ( ! Storage.has(store) && id ) {
            Ajax.show(input, id);
        }

        if ( ! Storage.has(store) && ! id ) {
            Ajax.index(input);
        }

        return this.bind(input.splice(1, 2), scope);
    };

    this.import = (key) => {
        return (resolve) => Modules.import(key, (data) => resolve(data));
    }

}
