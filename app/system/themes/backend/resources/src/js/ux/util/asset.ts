
import { assign } from 'lodash'

export default class Asset
{

    protected error (link : string)
    {
        console.error('Error on loading: ' + link);
    }

    protected load (link : string)
    {
        console.info('Done on loading: ' + link);
    }

    public script (link : string, load : any = null, error : any = null)
    {
        let el : HTMLElement = document.createElement('script');

        assign(el, {
            src: link, async: true
        });

        assign(el, {
            onload: () => {
                load ? load(link) :
                    this.load(link);
            },
            onerror: () => {
                error ? error(link) :
                    this.error(link);
            }
        });

        document.getElementsByTagName("head")[0]
            .append(el);

        return this;
    }

    public style (link : string, load : any = null, error : any = null)
    {
        let el : HTMLElement = document.createElement('link');

        $.extend(el, {
            href: link, rel: 'stylesheet'
        });

        $.extend(el, {
            onload: () => {
                load ? load(link) :
                    this.load(link);
            },
            onerror: () => {
                error ? error(link) :
                    this.error(link);
            }
        });

        document.getElementsByTagName("head")[0]
            .append(el);

        return this;
    }

}
