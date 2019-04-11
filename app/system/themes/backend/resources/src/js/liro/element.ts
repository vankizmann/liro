export default abstract class Element
{
    public static prefix : string = 'ui';

    /**
     * Map callback on selector.
     */
    public static bind(key : string, callback : any)
    {
        let selector = this.getPrefix(key);

        document.querySelectorAll('[' + selector + ']')

            .forEach((el : HTMLElement) => {
                callback.call({}, el, this.parseParams(el.getAttribute(selector)))
            });

        return true;
    }

    public static parseParams(params : string)
    {
        let parsed = {};

        params.match(
            /(?<=(^|;))([^\s]+\s*:\s*(".*?"|'.*?'|.*?)?\s*)(?=(;|$))/g
        ).forEach((match) => {

            let attribute = match.match(
                /([^\s]+)\s*:\s*(".*?"|'.*?'|.*?)?\s*/
            );

            if ( attribute.length !== 3 ) {
                return;
            }

            parsed[attribute[1]] = attribute[2].replace(
                /(^["']*|["']*$)/g, ''
            );
        });

        return parsed;
    }

    public static getPrefix(key : string)
    {
        return key ? this.prefix + '-' + key : this.prefix;
    }

    public static setPrefix(prefix : string)
    {
        this.prefix = prefix;
    }

}
