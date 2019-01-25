export default function () {

    /**
     * Show storage
     */
    this.show = [];

    /**
     * Return true if id is in show storage
     */
    this.active = function (id) {
        var intID = _.toInteger(id);
        return _.indexOf(this.show, intID) != -1;
    }.bind(this);

    /**
     * Toggle id in show storage
     */
    this.toggle = function (id) {
        var intID = _.toInteger(id);
        this.show = _.xor(this.show, [intID]);
    }.bind(this);

    /**
     * Apply styles to nestable items
     */
    this.styles = function () {
        $('.nestable-item [data-id]').each((index, el) => {
            if ( this.active(el.dataset.id) ) {
                $(el).parents('.nestable-item').eq(0).addClass('nestable-show');
            }
            if ( ! this.active(el.dataset.id) ) {
                $(el).parents('.nestable-item').eq(0).removeClass('nestable-show');
            }
        });
    }.bind(this);

    /**
     * Bind style changes on mouse move
     */
    $(document).mousemove(this.styles);
}