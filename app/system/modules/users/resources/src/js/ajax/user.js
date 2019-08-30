import Vue from "vue";

Vue.Ajax.bind('user-index', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.user.index', null, query);
    return ajax.get(route);
});

Vue.Ajax.bind('user-show', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.user.show', { user: query.id });
    return ajax.get(route, query);
});

Vue.Ajax.bind('user-store', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.user.store');
    return ajax.post(route, query);
});

Vue.Ajax.bind('user-update', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.user.update', { user: query.id });
    return ajax.put(route, query);
});

