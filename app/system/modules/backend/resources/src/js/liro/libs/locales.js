import { get, each, merge } from "lodash";

export default function () {

    this.locales = window._locales || {};

    let pickByCount = function (splits, count) {

        let splitLength = splits.length;

        if ( splitLength == 3 && count == 0 ) {
            return splits[0];
        }

        if ( splitLength == 3 && count == 1 ) {
            return splits[1];
        }

        if ( splitLength == 3 && count <= 2 ) {
            return splits[2];
        }

        if ( splitLength == 2 && count == 1 ) {
            return splits[0];
        }

        if ( splitLength == 2 && count != 1 ) {
            return splits[1];
        }

        return splits[0];
    };

    this.set = (key, value) => {
        this.locales[key] = value;
    };

    this.trans = (key, values) => {

        if ( ! key.match(/^(.+?)::(.+?)$/) ) {
            key = 'theme::' + key;
        }

        let message = get(this.locales, key, key);

        each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    };

    this.choice = (key, count, values) => {

        if ( ! key.match(/^(.+?)::(.+?)$/) ) {
            key = 'theme::' + key;
        }

        let splits = get(this.locales, key, key).split('|');

        if ( values.count !== undefined ) {
            values = merge({ count: count }, values || {});
        }

        let message = pickByCount(splits, count || 0);

        each(values, (value, key) => {
            message = message.replace(new RegExp(':' + key, 'g'), value);
        });

        return message;
    };

}
