export default () => {

    this.prevent = false;

    this.preventer = () => {
        var buffer = this.prevent;
        this.prevent = false;
        return !buffer;
    }

    this.activatePrevent = () => {
        this.prevent = true;
    }

    this.pointer = 0;

    this.resetPointer = () => {
        return this.pointer = 0
    }

    this.increasePointer = () => {
        return this.pointer++;
    }

    this.decreasePointer = () => {
        return this.pointer--;
    }

    this.history = [];

    this.getHistory = (value) => {
        return Object.assign({}, this.history[this.pointer]);
    }

    this.pushHistory = (value) => {
        this.history[this.pointer] = Object.assign({}, value);
    }

    this.resetHistory = () => {
        this.history = this.history.slice(0, this.pointer + 1);
        this.pointer = this.history.length - 1;
    }

    this.canUndo = false;
    this.canRedo = false;

    this.defineUndoRedo = () => {
        this.canUndo = this.pointer > 0;
        this.canRedo = this.pointer < this.history.length - 1;
    }

    this.init = (value) => {
        this.defineUndoRedo();
        this.pushHistory(value);
        this.defineUndoRedo();
    }

    this.save = (value) => {
        this.resetHistory();
        this.defineUndoRedo();
        this.increasePointer();
        this.pushHistory(value);
        this.defineUndoRedo();
    }

    this.reset = () => {
        this.resetPointer();
        this.resetHistory();
        this.defineUndoRedo();
        this.activatePrevent();
        return this.getHistory();
    }

    this.undo = () => {
        this.decreasePointer();
        this.defineUndoRedo();
        this.activatePrevent();
        return this.getHistory();
    }

    this.redo = () => {
        this.increasePointer();
        this.defineUndoRedo();
        this.activatePrevent();
        return this.getHistory();
    }

    return this;
}