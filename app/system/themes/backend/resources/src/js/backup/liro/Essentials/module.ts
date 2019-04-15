import Queue from './queue';
import Asset from './asset';

declare var _ : any;

export default class Module
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
        this.imports[name] = _.assign({
            scripts: [], styles: [], modules: []
        }, config);

        return this;
    }

    public static load (name : string, load : any = undefined, error : any = undefined)
    {
        let reload = () => {
            this.load(name, load, error);
        };

        if ( ! _.has(this.imports, name) ) {
            return error ? error() : error;
        }

        if ( _.has(this.loaded, name) ) {
            return load ? load() : load;
        }

        if ( _.has(this.aborted, name) ) {
            return error ? error() : error;
        }

        if ( _.has(this.pending, name) ) {
            return setTimeout(reload, 100);
        }

        let queue = new Queue();

        queue.add((next) => {
            this.pending.push(name);
            next();
        });

        this.imports[name].styles.forEach((style) => {
            queue.add((next) => Asset.style(style, next, error));
        });

        this.imports[name].scripts.forEach((script) => {
            queue.add((next) => Asset.script(script, next, error));
        });

        queue.add((next) => {

            _.pull(this.pending, name);

            let modules = _.intersection(_.keys(this.exports),
                this.imports[name].modules);

            if ( modules.length !== this.imports[name].modules.length ) {
                return error ? error() : error;
            }

            this.loaded.push(name);
            next();
        });

        queue.add(load).run();
    };

    public static export (name : string, data : any)
    {
        return this.exports[name] = data;
    }

    public static import (name : string, load : any = undefined, error : any = undefined)
    {
        if ( this.exports[name] !== undefined ) {
            return load ? load(this.exports[name]) : load;
        }

        let index = _.findKey(this.imports, (item : any) => {
            return _.intersection(item.modules, [name]).length;
        });

        if ( index === undefined ) {
            return error ? error() : error;
        }

        if ( this.loaded[index] !== undefined ) {
            return load ? load(this.exports[name]) : load;
        }

        this.load(index, () => load(this.exports[name]), error);
    };

}
