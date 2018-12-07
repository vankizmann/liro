<?php

return [

    'ajax@liro-users.api.auth.login' => [
        'liro-users::api.auth.login', 'Liro\Users\Routers\Ajax\AuthRouter@login'
    ],

    'ajax@liro-users.api.auth.token' => [
        'liro-users::api.auth.token', 'Liro\Users\Routers\Ajax\AuthRouter@token'
    ],

    'admin@liro-users.auth.login' => [
        'liro-users::module.auth.login', 'Liro\Users\Routers\Admin\AuthRouter@login'
    ],

    'admin@liro-users.auth.logout' => [
        'liro-users::module.auth.logout', 'Liro\Users\Routers\Admin\AuthRouter@logout'
    ],

    'ajax@liro-users.api.user.index' => [
        'liro-users::api.user.index', 'Liro\Users\Routers\Ajax\UserRouter@index'
    ],

    'ajax@liro-users.api.user.show' => [
        'liro-users::api.user.show', 'Liro\Users\Routers\Ajax\UserRouter@show'
    ],

    'ajax@liro-users.api.user.store' => [
        'liro-users::api.user.store', 'Liro\Users\Routers\Ajax\UserRouter@store'
    ],

    'ajax@liro-users.api.user.update' => [
        'liro-users::api.user.update', 'Liro\Users\Routers\Ajax\UserRouter@update'
    ],

    'admin@liro-users.user.index' => [
        'liro-users::module.user.index', 'Liro\Users\Routers\Admin\UserRouter@index'
    ],

    'admin@liro-users.user.create' => [
        'liro-users::module.user.create', 'Liro\Users\Routers\Admin\UserRouter@create'
    ],

    'admin@liro-users.user.edit' => [
        'liro-users::module.user.edit', 'Liro\Users\Routers\Admin\UserRouter@edit'
    ],

    'ajax@liro-users.api.role.index' => [
        'liro-users::api.role.index', 'Liro\Users\Routers\Ajax\RoleRouter@index'
    ],

    'ajax@liro-users.api.role.show' => [
        'liro-users::api.role.show', 'Liro\Users\Routers\Ajax\RoleRouter@show'
    ],

    'ajax@liro-users.api.role.store' => [
        'liro-users::api.role.store', 'Liro\Users\Routers\Ajax\RoleRouter@store'
    ],

    'ajax@liro-users.api.role.update' => [
        'liro-users::api.role.update', 'Liro\Users\Routers\Ajax\RoleRouter@update'
    ],

    'admin@liro-users.role.index' => [
        'liro-users::module.role.index', 'Liro\Users\Routers\Admin\RoleRouter@index'
    ],

    'admin@liro-users.role.create' => [
        'liro-users::module.role.create', 'Liro\Users\Routers\Admin\RoleRouter@create'
    ],

    'admin@liro-users.role.edit' => [
        'liro-users::module.role.edit', 'Liro\Users\Routers\Admin\RoleRouter@edit'
    ]

];