(function (global) {

    function History (initial) {

        this.states = [
            Object.assign({}, initial)
        ];
        
        this.pointer = 0;
        this.prevent = false;

        this.canUndo = false;
        this.canRedo = false;

    }

    History.prototype.defineCanUndo = function () {
        this.canUndo = this.pointer > 0;
        return this.canUndo;
    }

    History.prototype.defineCanRedo = function () {
        this.canRedo = this.pointer < this.states.length - 1;
        return this.canRedo;
    }

    History.prototype.preventer = function () {
        var _prevent = this.prevent; this.prevent = false;
        return _prevent;
    }

    History.prototype.init = function (data) {
        this.states[this.pointer] = Object.assign({}, data);
    }

    History.prototype.save = function (data) {
        
        if ( this.preventer() ) return;
        
        this.states = this.states.slice(0, this.pointer + 1);
        this.pointer = this.states.length;

        this.defineCanUndo();
        this.defineCanRedo();

        this.states[this.pointer] = Object.assign({}, data);
    }

    History.prototype.reset = function () {

        this.states = this.states.slice(0, 1);
        this.pointer = this.states.length - 1;

        this.defineCanUndo();
        this.defineCanRedo();

        this.prevent = true;

        return Object.assign({}, this.states[this.pointer]);
    }

    History.prototype.undo = function () {

        this.pointer--;
        this.prevent = true;

        this.defineCanUndo();
        this.defineCanRedo();

        return Object.assign({}, this.states[this.pointer]);
    }

    History.prototype.redo = function () {

        this.pointer++;
        this.prevent = true;

        this.defineCanUndo();
        this.defineCanRedo();

        return Object.assign({}, this.states[this.pointer]);
    }

    if (typeof module != 'undefined' && module.exports) {
        exports = module.exports = History;
    } else {
        global.History = History;
    }

})(typeof window === 'undefined' ? this : window);
