export default function () {

    this.queue = [];

    let handler = (queue, index) => {
        return () => {
            if (queue.length - 1 > index++) {
                queue[index](handler(queue, index));
            }
        }
    };

    this.clear = () => {
        this.queue = [];
        return this;
    };

    this.add = (callback) => {
        this.queue.push(callback);
        return this;
    };

    this.run = () => {
        if ( this.queue.length ) {
            this.queue[0](handler(this.queue.slice(0), 0));
        }
    };

}