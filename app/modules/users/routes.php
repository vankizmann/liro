<?php

return [

    'ajax@liro-users.ajax.auth.login' => [
        'liro-users::ajax.auth.login', 'Liro\Users\Routers\Ajax\AuthRouter@login'
    ],

    'ajax@liro-users.ajax.auth.token' => [
        'liro-users::ajax.auth.token', 'Liro\Users\Routers\Ajax\AuthRouter@token'
    ],

    'admin@liro-users.admin.auth.login' => [
        'liro-users::module.auth.login', 'Liro\Users\Routers\Admin\AuthRouter@login'
    ],

    'admin@liro-users.admin.auth.logout' => [
        'liro-users::module.auth.logout', 'Liro\Users\Routers\Admin\AuthRouter@logout'
    ],

    'ajax@liro-users.ajax.user.index' => [
        'liro-users::ajax.user.index', 'Liro\Users\Routers\Ajax\UserRouter@index'
    ],

    'ajax@liro-users.ajax.user.show' => [
        'liro-users::ajax.user.show', 'Liro\Users\Routers\Ajax\UserRouter@show'
    ],

    'ajax@liro-users.ajax.user.store' => [
        'liro-users::ajax.user.store', 'Liro\Users\Routers\Ajax\UserRouter@store'
    ],

    'ajax@liro-users.ajax.user.update' => [
        'liro-users::ajax.user.update', 'Liro\Users\Routers\Ajax\UserRouter@update'
    ],

    'admin@liro-users.admin.user.index' => [
        'liro-users::module.user.index', 'Liro\Users\Routers\Admin\UserRouter@index'
    ],

    'admin@liro-users.admin.user.create' => [
        'liro-users::module.user.create', 'Liro\Users\Routers\Admin\UserRouter@create'
    ],

    'admin@liro-users.admin.user.edit' => [
        'liro-users::module.user.edit', 'Liro\Users\Routers\Admin\UserRouter@edit'
    ],

    'ajax@liro-users.ajax.role.index' => [
        'liro-users::ajax.role.index', 'Liro\Users\Routers\Ajax\RoleRouter@index'
    ],

    'ajax@liro-users.ajax.role.show' => [
        'liro-users::ajax.role.show', 'Liro\Users\Routers\Ajax\RoleRouter@show'
    ],

    'ajax@liro-users.ajax.role.store' => [
        'liro-users::ajax.role.store', 'Liro\Users\Routers\Ajax\RoleRouter@store'
    ],

    'ajax@liro-users.ajax.role.update' => [
        'liro-users::ajax.role.update', 'Liro\Users\Routers\Ajax\RoleRouter@update'
    ],

    'admin@liro-users.admin.role.index' => [
        'liro-users::module.role.index', 'Liro\Users\Routers\Admin\RoleRouter@index'
    ],

    'admin@liro-users.admin.role.create' => [
        'liro-users::module.role.create', 'Liro\Users\Routers\Admin\RoleRouter@create'
    ],

    'admin@liro-users.admin.role.edit' => [
        'liro-users::module.role.edit', 'Liro\Users\Routers\Admin\RoleRouter@edit'
    ]

];