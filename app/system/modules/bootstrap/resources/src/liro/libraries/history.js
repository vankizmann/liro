(function (global) {

    function History (data) {

        this.states = [];
        this.pointer = 0;
        this.prevent = false;
    }

    History.prototype.preventer = function () {
        var _prevent = this.prevent; this.prevent = false;
        return !_prevent;
    }

    History.prototype.init = function (data) {
        this.states[this.pointer] = Object.assign({}, data);
    }

    History.prototype.save = function (data) {
        this.states = this.states.slice(0, this.pointer + 1);
        this.pointer = this.states.length;
        this.states[this.pointer] = Object.assign({}, data);
    }

    History.prototype.reset = function () {
        this.states = this.states.slice(0, 1);
        this.pointer = this.states.length - 1;
        this.prevent = true;
        return Object.assign({}, this.states[this.pointer]);
    }

    History.prototype.undo = function () {
        this.pointer--;
        this.prevent = true;
        return Object.assign({}, this.states[this.pointer]);
    }

    History.prototype.redo = function () {
        this.pointer++;
        this.prevent = true;
        return Object.assign({}, this.states[this.pointer]);
    }

    History.prototype.canUndo = function () {
        return this.pointer > 0;
    }

    History.prototype.canRedo = function () {
        return this.pointer < this.states.length - 1;
    }

    if (typeof module != 'undefined' && module.exports) {
        exports = module.exports = History;
    } else {
        global.History = History;
    }

})(typeof window === 'undefined' ? this : window);
