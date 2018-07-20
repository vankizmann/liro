module.exports = function(values, pattern) {

    if ( !pattern ) {
        pattern = /\.[^\.]+$/;
    }

    return _.reduce(values, (base, item) => {

        var group = item.split(pattern)[0];
    
        if ( typeof base[group] == 'undefined' ) {
            base[group] = [];
        }

        base[group].push(item);

        return base;
    }, {});
}
