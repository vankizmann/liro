import { assign, has, each, pull, keys, intersection, findKey } from 'lodash';

import Queue from './queue';
import Asset from './asset';

export default class Ext
{
    protected static imports :
        any = {};

    protected static exports :
        any = {};

    protected static pending :
        any[] = [];

    protected static loaded :
        any[] = [];

    protected static aborted :
        any[] = [];


    public static bind (name : string, config : any)
    {
        this.imports[name] = assign({
            scripts: [], styles: [], modules: []
        }, config);
    }

    public static load (name : string, load : any = undefined, error : any = undefined)
    {
        let reload = () => {
            this.load(name, load, error);
        };

        if ( ! has(this.imports, name) ) {
            return error ? error() : error;
        }

        if ( has(this.loaded, name) ) {
            return load ? load() : load;
        }

        if ( has(this.aborted, name) ) {
            return error ? error() : error;
        }

        if ( has(this.pending, name) ) {
            return setTimeout(reload, 100);
        }

        let queue = new Queue(), asset = new Asset();

        queue.add((next) => {
            this.pending.push(name);
            next();
        });

        each(this.imports[name].styles, (style) => {
            queue.add((next) => asset.style(style, next, error));
        });

        each(this.imports[name].scripts, (script) => {
            queue.add((next) => asset.script(script, next, error));
        });

        queue.add((next) => {
            pull(this.pending, name);
            next();
        });

        queue.add((next) => {
            this.loaded.push(name);
            next();
        });

        queue.add(load).run();
    };

    public static export (name : string, data : any)
    {
        return this.exports[name] = data;
    }

    public static import (name : string, load : any = null, error : any = null)
    {
        if ( this.exports[name] !== undefined ) {
            return load ? load(this.exports[name]) : load;
        }

        let index = findKey(this.imports, (item : any) => {
            return intersection(item.modules, [name]).length;
        });

        if ( index === undefined ) {
            return error ? error() : console.error('Import ' + name + ' not found.');
        }

        if ( this.loaded[index] !== undefined ) {
            return load ? load(this.exports[name]) : load;
        }

        this.load(index, () => load(this.exports[name]), error);
    };

}
