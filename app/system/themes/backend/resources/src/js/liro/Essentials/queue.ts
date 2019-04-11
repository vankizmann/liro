export default class Queue
{

    public queue : any[] = [];

    protected queueHandler (queue, index) {
        return () => {
            if (queue.length - 1 > index++) {
                queue[index](this.queueHandler(queue, index));
            }
        }
    }

    public clear () {
        this.queue = [];
        return this;
    }

    public add (callback) {
        this.queue.push(callback);
        return this;
    }

    public run () {
        if ( this.queue.length ) {
            this.queue[0](this.queueHandler(this.queue.slice(0), 0));
        }
    }

}
