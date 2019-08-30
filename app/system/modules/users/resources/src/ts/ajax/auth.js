Nano.Ajax.bind('auth-login', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.auth.login');
    return ajax.post(route, query);
});

Nano.Ajax.bind('auth-logout', function (ajax, query) {
    let route = Nano.Route.get('liro-users.ajax.auth.logout');
    return ajax.post(route, query);
});

