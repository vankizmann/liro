import Vue from "vue";

Vue.Ajax.bind('role-index', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.role.index', null, query);
    return ajax.get(route);
});

Vue.Ajax.bind('role-show', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.role.show', { role: query.id });
    return ajax.get(route, query);
});

Vue.Ajax.bind('role-store', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.role.store');
    return ajax.post(route, query);
});

Vue.Ajax.bind('role-update', function (ajax, query) {
    let route = Vue.Route.get('liro-users.ajax.role.update', { role: query.id });
    return ajax.put(route, query);
});

