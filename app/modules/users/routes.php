<?php

return [

    'ajax@liro-users.ajax.auth.login' => [
        'liro-users::ajax.auth.login', 'Liro\Users\Routers\Ajax\AuthRouter@login'
    ],

    'ajax@liro-users.ajax.auth.token' => [
        'liro-users::ajax.auth.token', 'Liro\Users\Routers\Ajax\AuthRouter@token'
    ],

    'admin@liro-users.admin.auth.login' => [
        'liro-users::admin.auth.login', 'Liro\Users\Routers\Admin\AuthRouter@login'
    ],

    'admin@liro-users.admin.auth.logout' => [
        'liro-users::admin.auth.logout', 'Liro\Users\Routers\Admin\AuthRouter@logout'
    ],

    'ajax@liro-users.ajax.user.index' => [
        'liro-users::ajax.user.index', 'Liro\Users\Routers\Ajax\UserRouter@index'
    ],

    'admin@liro-users.admin.user.index' => [
        'liro-users::admin.user.index', 'Liro\Users\Routers\Admin\UserRouter@index'
    ],

    'admin@liro-users.admin.user.create' => [
        'liro-users::admin.user.create', 'Liro\Users\Routers\Admin\UserRouter@create'
    ],

    'admin@liro-users.admin.user.edit' => [
        'liro-users::admin.user.edit', 'Liro\Users\Routers\Admin\UserRouter@edit'
    ],

    'ajax@liro-users.ajax.role.index' => [
        'liro-users::ajax.role.index', 'Liro\Users\Routers\Ajax\RoleRouter@index'
    ],

    'admin@liro-users.admin.role.index' => [
        'liro-users::admin.role.index', 'Liro\Users\Routers\Admin\RoleRouter@index'
    ],

    'admin@liro-users.admin.role.create' => [
        'liro-users::admin.role.create', 'Liro\Users\Routers\Admin\RoleRouter@create'
    ],

    'admin@liro-users.admin.role.edit' => [
        'liro-users::admin.role.edit', 'Liro\Users\Routers\Admin\RoleRouter@edit'
    ]

];
