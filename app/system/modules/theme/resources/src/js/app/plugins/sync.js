export default function (Vue, options) {

    var syncFunction = function (name, options) {

        var fetchList = function () {
            window.Axios.get(options.url).then(res => window.App[name] = res.data);
        }

        window.Liro.events.watch('sync.' + name, fetchList);
    }

    Vue.sync = syncFunction;
}