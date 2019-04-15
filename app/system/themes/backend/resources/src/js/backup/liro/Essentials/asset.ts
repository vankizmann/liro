
declare var $ : any;

export default abstract class Asset
{

    protected static errorFallback (link : string)
    {
        console.error('Error on loading: ' + link);
    }

    protected static loadFallback (link : string)
    {
        console.info('Done on loading: ' + link);
    }

    public static script (link : string, load : any = undefined, error : any = undefined)
    {
        let el : HTMLElement = document.createElement('script');

        $.extend(el, {
            src: link, async: true
        });

        $.extend(el, {
            onload: () => {
                load ? load.call({}, link) :
                    Asset.loadFallback.call({}, link);
            },
            onerror: () => {
                error ? error.call({}, link) :
                    Asset.errorFallback.call({}, link);
            }
        });

        document.getElementsByTagName("head")[0].append(el);

        return this;
    }

    public static style (link : string, load : any = undefined, error : any = undefined)
    {
        let el : HTMLElement = document.createElement('link');

        $.extend(el, {
            href: link, rel: 'stylesheet'
        });

        $.extend(el, {
            onload: () => {
                load ? load.call({}, link) :
                    Asset.loadFallback.call({}, link);
            },
            onerror: () => {
                error ? error.call({}, link) :
                    Asset.errorFallback.call({}, link);
            }
        });

        document.getElementsByTagName("head")[0].append(el);

        return this;
    }

}
