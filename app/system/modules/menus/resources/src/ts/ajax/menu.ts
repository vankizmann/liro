declare var Vue : any;
declare var ux : any;

console.log('foo');

ux.ajax.bind('menu-index', function (query) {
    let route = ux.routes.get('liro-users.ajax.user.index', null, query);
    return Vue.$http.get(route);
});
