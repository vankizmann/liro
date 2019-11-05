import Vue from "vue";

Vue.Ajax.bind('auth-login', function (ajax, query, options) {
    let route = Vue.Route.get('liro-users.ajax.auth.login');
    return ajax.post(route, query, options);
});

Vue.Ajax.bind('auth-logout', function (ajax, query, options) {
    let route = Vue.Route.get('liro-users.ajax.auth.logout');
    return ajax.post(route, query, options);
});

