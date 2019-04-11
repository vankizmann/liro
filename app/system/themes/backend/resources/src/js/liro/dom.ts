export default class DOM
{
    public static ready(callback : any)
    {
        let callbackHandler = () => {
            this.destroyListener(callbackHandler);
            callback.call({});
        };

        if ( document.readyState === 'complete' ) {
            return callbackHandler();
        }

        return this.registerListener(callbackHandler);
    }

    protected static registerListener(callback : any)
    {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    }

    protected static destroyListener(callback : any)
    {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    }

}
