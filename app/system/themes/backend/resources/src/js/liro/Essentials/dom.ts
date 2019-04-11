export default class DOM
{
    /**
     * Call callback on dom ready.
     */
    public static ready(callback : () => void)
    {
        // Create callback with destroyer
        let callbackHandler = () => {
            this.destroyListener(callbackHandler);
            callback.call({});
        };

        // Call function if already loaded
        if ( document.readyState === 'complete' ) {
            return callbackHandler();
        }

        return this.registerListener(callbackHandler);
    }

    /**
     * Register callback on dom content loaded event.
     */
    protected static registerListener(callback : () => void)
    {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    }

    /**
     * Remove listener for dom content loaded event.
     */
    protected static destroyListener(callback : () => void)
    {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    }

}
