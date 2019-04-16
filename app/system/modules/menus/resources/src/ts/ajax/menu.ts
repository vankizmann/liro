declare var ux : any;

ux.ajax.bind('menu-index', function (ajax, query) {
    let route = ux.route.get('liro-users.ajax.user.index', null, query);
    return ajax.get(route);
});
