export default function (value) {
    return _.filter(value);
}

if (window.Liro) {
    Liro.vue.filter('filter', this.default);
}