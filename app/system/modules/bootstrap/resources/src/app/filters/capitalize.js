export default function(value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}

liro.vue.$filter('capitalize', this.default);
