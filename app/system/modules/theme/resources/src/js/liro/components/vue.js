export default function (Events, Routes) {

    var Vue = this;

    // Define vue components
    Vue.components = [];

    // Define vue filters
    Vue.filters = [];

    // Define vue directives
    Vue.directives = [];

    // Define vue directives
    Vue.apis = [];

    Vue.component = function (name, options) {
        Vue.components.push({ name, options });
    }

    Vue.filter = function (name, options) {
        Vue.filters.push({ name, options });
    }

    Vue.directive = function (name, options) {
        Vue.directives.push({ name, options });
    }

    Vue.sync = function (name, options) {
        Vue.apis.push({ name, options });
    }

    Vue.data = function () {
        var data = {};

        _.each(Vue.apis, function (value) {
            data[value.name] = value.default || [];
        });

        return data;
    }

    return Vue;
}
