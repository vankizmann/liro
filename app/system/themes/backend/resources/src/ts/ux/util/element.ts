declare var _ : any;

export abstract class Element
{
    /**
     * Prefix for attribute selector.
     */
    public static prefix : string = 'ux';

    /**
     * Bind callback on selector.
     */
    public static bind(key : string, callback : (el: HTMLElement, options: any) => void)
    {
        let selector = this.getPrefix(key);

        document.querySelectorAll('[' + selector + ']')

            .forEach((el : HTMLElement) => {

                let callbackWrapper = () => {
                    callback.call({}, el, this.parseParams(el.getAttribute(selector)));
                };

                new MutationObserver(callbackWrapper).observe(el, {
                    childList: true
                });

                callbackWrapper();
            });

        return this;
    }

    /**
     * Parse param string to object (e.g. foo: bar; test: lorem).
     */
    public static parseParams(params : string)
    {
        let parsed = {};

        let result = params.match(
            /(^|;)(\s*[^\s]+\s*:\s*(".*?"|'.*?'|.*?)\s*)(?=(;|$))/g
        );

        if ( result === undefined || result === null ) {
            return parsed;
        }

        _.each(result, (match) => {

            // Get key and value from match
            let attribute = match.match(
                /^;?\s*([^\s]+)\s*:\s*(".*?"|'.*?'|.*?)\s*$/
            );

            // Skip if length does not match
            if ( attribute.length !== 3 ) {
                return;
            }

            let value : any = attribute[2]
                .replace(/(^["']*|["']*$)/g, '');

            if ( typeof value === 'string' && value.match(/^true$/i) ) {
                value = true;
            }

            if ( typeof value === 'string' && value.match(/^false$/i) ) {
                value = false;
            }

            if ( typeof value === 'string' && value.match(/^[0-9]+$/) ) {
                value = parseInt(value);
            }

            if ( typeof value === 'string' && value.match(/^[0-9\\.]+$/) ) {
                value = parseFloat(value);
            }

            // Add to parsed
            parsed[attribute[1]] = value;
        });

        return parsed;
    }

    /**
     * Return prefix with key.
     */
    public static getPrefix(key : string)
    {
        return key ? this.prefix + '-' + key : this.prefix;
    }

    /**
     * Set prefix to given value.
     */
    public static setPrefix(prefix : string)
    {
        this.prefix = prefix;
    }

}

export default Element;
