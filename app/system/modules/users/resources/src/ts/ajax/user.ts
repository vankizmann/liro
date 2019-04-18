declare var ux : any;

ux.ajax.bind('user-index', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.user.index', null, query);
    return ajax.get(route);
});

ux.ajax.bind('user-show', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.user.show', { user: query.id });
    return ajax.get(route, query);
});

ux.ajax.bind('user-store', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.user.store');
    return ajax.post(route, query);
});

ux.ajax.bind('user-update', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.user.update', { user: query.id });
    return ajax.put(route, query);
});

