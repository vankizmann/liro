declare var ux : any;

ux.ajax.bind('auth-login', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.auth.login');
    return ajax.post(route, query);
});

ux.ajax.bind('auth-logout', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.auth.logout');
    return ajax.post(route, query);
});

