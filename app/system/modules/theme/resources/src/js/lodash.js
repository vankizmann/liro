
_.mixin({

    hasValue: function (input, value) {
        return input instanceof Array ? input.indexOf(value) != -1 : input == value;
    },

    changeValue: function (input, value) {
        return input instanceof Array ? _.xor(input, [value]) : value;
    },

    filterMap: function (input, callback) {
        return _.map(input instanceof Array ? input : [input], callback).filter(value => value != null);
    }

});