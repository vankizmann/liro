import { filter, each } from "lodash"

export default function () {

    this.events = [];

    this.bind = (name, callback) => {
        this.events.push({ name, callback });
    };

    this.emit = (name, ...args) => {
        each(filter(this.events, { name }), (event) => {
            event.callback(...args);
        });
    };

}
