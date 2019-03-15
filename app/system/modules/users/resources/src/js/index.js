
import AuthLogin from './auth/login';
liro.modules.export('liro-auth-login', AuthLogin);

import UserIndex from './user/index';
liro.modules.export('liro-user-index', UserIndex);

import UserCreate from './user/create';
liro.modules.export('liro-user-create', UserCreate);

import UserEdit from './user/edit';
liro.modules.export('liro-user-edit', UserEdit);


liro.ajax.bind('user-index', function (query) {

    let route = liro.routes.get('liro-users.ajax.user.index', null, query);

    return axios.get(route);
});

liro.ajax.bind('user-show', function (user) {

    let route = liro.routes.get('liro-users.ajax.user.show', {
        user: user.id
    });

    return axios.get(route);
});

liro.ajax.bind('user-store', function (user) {

    let route = liro.routes.get('liro-users.ajax.user.store');

    return axios.post(route, user);
});

liro.ajax.bind('user-update', function (user) {

    let route = liro.routes.get('liro-users.ajax.user.update', {
        user: user.id
    });

    return axios.post(route, user);
});

liro.ajax.bind('role-index', function () {

    let route = liro.routes.get('liro-users.ajax.role.index');

    return axios.get(route);
});

liro.ajax.bind('role-show', function () {

    let route = liro.routes.get('liro-users.ajax.role.show');

    return axios.get(route);
});

liro.ajax.bind('role-store', function (role) {

    let route = liro.routes.get('liro-users.ajax.role.store');

    return axios.post(route, role);
});

liro.ajax.bind('role-update', function (role) {

    let route = liro.routes.get('liro-users.ajax.role.update', {
        role: role.id
    });

    return axios.post(route, role);
});
