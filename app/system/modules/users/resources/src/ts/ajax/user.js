Nano.Ajax.bind('user-index', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.user.index', null, query);
    return ajax.get(route);
});

Nano.Ajax.bind('user-show', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.user.show', { user: query.id });
    return ajax.get(route, query);
});

Nano.Ajax.bind('user-store', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.user.store');
    return ajax.post(route, query);
});

Nano.Ajax.bind('user-update', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.user.update', { user: query.id });
    return ajax.put(route, query);
});

