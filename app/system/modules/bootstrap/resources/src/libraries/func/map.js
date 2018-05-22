module.exports = function(values, key, collection) {
    return _.map(values, (value) => _.find(collection, [key, value]));
}
