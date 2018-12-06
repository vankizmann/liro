export default function (Vue, options) {

    var syncFunction = function (name, options) {

        var fetchList = function () {
            window.Axios.get(options.url).then(res => window.App[name] = res.data);
        }

        window.Liro.events.watch(name + '@sync', fetchList);
    }

    Vue.sync = syncFunction;
}