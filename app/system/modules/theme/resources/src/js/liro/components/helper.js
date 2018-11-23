export default function () {

    /**
     * Watch function
     */

    this.$range = this.range = function(length, start) {
        return _.range(start, length + start);
    }.bind(this);

    /**
     * Watch function
     */

    this.$map = this.map = function(values, key, items) {
        return _.map(values, (value) => _.find(items, [key, value]));
    }.bind(this);

    /**
     * Find function
     */

    this.$findRecursive = this.findRecursive = function(item, key, value, childs) {

        if (item[key] == value) {
            return item;
        }

        if (typeof item[childs] == 'object') {
            return _.first(_.filter(_.map(item[childs], (item) => this.findRecursive(item, key, value, childs)), item => !_.isUndefined(item)));
        }

    }.bind(this);

    /**
     * Ladder function
     */

    this.$ladderRecursive = this.ladderRecursive = function(item, key, value, childs, ladder) {

        ladder.push(item);

        if (typeof item[childs] == 'object') {
            _.map(item[childs], (item) => {
                if (this.findRecursive(item, key, value, childs)) {
                    ladder = this.ladderRecursive(item, key, value, childs, ladder);
                }
            });
        }

        return ladder;

    }.bind(this);

}
