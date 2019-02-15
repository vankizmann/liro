import { assign, findKey } from "lodash"
import { Events, Queue, Assets } from "../index";

export default function () {

    this.modules = {}, this.pending = [], this.loaded = [], this.exports = {};

    this.bind = (key, config) => {
        this.modules[key] = config;
        return this;
    };

    this.load = (key, callback) => {

        if ( this.pending.indexOf(key) != -1 ) {
            return setTimeout(() => this.load(key, callback), 100);
        }

        if ( this.loaded.indexOf(key) != -1 ) {
            return callback();
        }

        if ( this.modules[key] === undefined ) {
            return console.error('Module "' + key + '" config not found');
        }

        let config = assign({
            scripts: [], styles: [], modules: []
        }, this.modules[key]);

        let queue = new Queue(), assets = new Assets();

        assets.setError(() => {
            console.error('Module "' + key + '" assets not found')
        });

        queue.add((next) => {
            Events.emit('modules:load');
            this.pending.push(key);
            next();
        });

        for (let i = 0; config.styles.length > i; i++) {
            queue.add((next) => {
                assets.style(config.styles[i], next);
            });
        }

        for (let i = 0; config.scripts.length > i; i++) {
            queue.add((next) => {
                assets.script(config.scripts[i], next);
            });
        }

        queue.add((next) => {

            Events.emit('modules:done');

            this.pending.splice(
                this.pending.indexOf(key), 1
            );

            this.loaded.push(key);
            next();
        });

        queue.add(callback).run();
    };

    this.export = (key, data) => {
        this.exports[key] = data;
    };

    this.import = (key, callback) => {

        let index = findKey(this.modules, (el) => {
            return el.modules.indexOf(key) != -1;
        });

        if ( index == -1 ) {
            return console.error('Module "' + key + '" not found');
        }

        let response = () => {
            callback(this.exports[key]);
        };

        return ! this.loaded[index] ? this.load(index, response) : response();
    };

}
