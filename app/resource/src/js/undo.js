export default function(change) {

    this.index = 0;
    this.storage = [];

    var save = function(data) {
        console.log(this.storage);
        this.storage[this.index++] = data;
    }

    var canUndo = function() {
        console.log('undo!', this.index, 0, this.index != 0);
        return this.index != 0;
    }.bind(this);

    var undo = function() {
        if ( this.index != 0 ) {
            change.call(this.storage[this.index-1]);
        }
    }.bind(this);

    var canRedo = function() {
        console.log('redo!', this.index, this.storage.length, this.index != this.storage.length)
        return this.index != this.storage.length;
    }.bind(this);

    var redo = function() {
        console.log('redo!', this.index, this.storage.length);
        if ( this.index != this.storage.length ) {
            change.call(this.storage[this.index+1]);
        }
    }.bind(this);

    return {
        index: this.index, storage: this.storage, save, undo, canUndo, redo, canRedo
    }
}