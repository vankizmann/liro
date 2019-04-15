
declare var $ : any;

export default abstract class Event
{

    public static events : any[] = [];

    public static bind (name : string, callback : any)
    {
        this.events.push({ name, callback });

        return this;
    }

    public static fire (name : string, ...args : any)
    {
        let events : any[] = this.events.filter((item) => {
            return item.name === name;
        });

        $.each(events, (index, event) => {
            event.callback.call({}, ...args);
        });

        return this;
    }

    public static clear (name : string)
    {
        this.events = this.events.filter((item) => {
            return item.name !== name;
        });

        return this;
    }

}
