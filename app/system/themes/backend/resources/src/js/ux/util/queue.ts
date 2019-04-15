export default class Queue
{
    public queue :
        any[] = [];

    protected handler (queue, index) {
        return () => queue.length - 1 > index++ ?
            queue[index](this.handler(queue, index)) : null;
    }

    public clear ()
    {
        this.queue = [];

        return this;
    }

    public add (cb)
    {
        this.queue.push(cb);

        return this;
    }

    public run ()
    {
        this.queue.length ?
            this.queue[0](this.handler(this.queue.slice(0), 0)) : null;

        return this;
    }

}
