import Vue from "vue";

Vue.Ajax.bind('auth-login', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.auth.login');
    return ajax.post(route, query);
});

Vue.Ajax.bind('auth-logout', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.auth.logout');
    return ajax.post(route, query);
});

