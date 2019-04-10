function History (initial) {

    this.states = [
         _.merge({}, _.cloneDeep(initial, true))
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
    this.states[this.pointer] = _.cloneDeep(data);
}

History.prototype.save = function (data) {
    
    if ( this.preventer() ) return;
    
    this.states = this.states.slice(0, this.pointer + 1);
    this.pointer = this.states.length;

    this.defineCanUndo();
    this.defineCanRedo();

    this.states[this.pointer] = _.cloneDeep(data);
}

History.prototype.reset = function () {

    this.states = this.states.slice(0, 1);
    this.pointer = this.states.length - 1;

    this.defineCanUndo();
    this.defineCanRedo();

    this.prevent = true;

    return _.cloneDeep(this.states[this.pointer]);
}

History.prototype.undo = function () {

    this.pointer--;
    this.prevent = true;

    this.defineCanUndo();
    this.defineCanRedo();

    return _.cloneDeep(this.states[this.pointer]);
}

History.prototype.redo = function () {

    this.pointer++;
    this.prevent = true;

    this.defineCanUndo();
    this.defineCanRedo();

    return _.cloneDeep(this.states[this.pointer]);
}

export default History;