<?php

return [

    'admin@liro-users.auth.login' => [
        'liro-users::module.auth.login', 'Liro\Users\Routers\AuthRouter@login'
    ],

    'admin@liro-users.auth.logout' => [
        'liro-users::module.auth.logout', 'Liro\Users\Routers\AuthRouter@logout'
    ],

    'admin@liro-users.auth.token' => [
        'liro-users::module.auth.token', 'Liro\Users\Routers\AuthRouter@token'
    ],

    'ajax@liro-users.api.user.index' => [
        'liro-users::api.user.index', 'Liro\Users\Routers\UserApiRouter@index'
    ],

    'ajax@liro-users.api.user.show' => [
        'liro-users::api.user.show', 'Liro\Users\Routers\UserApiRouter@show'
    ],

    'ajax@liro-users.api.user.store' => [
        'liro-users::api.user.store', 'Liro\Users\Routers\UserApiRouter@store'
    ],

    'ajax@liro-users.api.user.update' => [
        'liro-users::api.user.update', 'Liro\Users\Routers\UserApiRouter@update'
    ],

    'admin@liro-users.user.index' => [
        'liro-users::module.user.index', 'Liro\Users\Routers\UserRouter@index'
    ],

    'admin@liro-users.user.create' => [
        'liro-users::module.user.create', 'Liro\Users\Routers\UserRouter@create'
    ],

    'admin@liro-users.user.edit' => [
        'liro-users::module.user.edit', 'Liro\Users\Routers\UserRouter@edit'
    ],

    'ajax@liro-users.api.role.index' => [
        'liro-users::api.role.index', 'Liro\Users\Routers\RoleApiRouter@index'
    ],

    'ajax@liro-users.api.role.show' => [
        'liro-users::api.role.show', 'Liro\Users\Routers\RoleApiRouter@show'
    ],

    'ajax@liro-users.api.role.store' => [
        'liro-users::api.role.store', 'Liro\Users\Routers\RoleApiRouter@store'
    ],

    'ajax@liro-users.api.role.update' => [
        'liro-users::api.role.update', 'Liro\Users\Routers\RoleApiRouter@update'
    ],

    'admin@liro-users.role.index' => [
        'liro-users::module.role.index', 'Liro\Users\Routers\RoleRouter@index'
    ],

    'admin@liro-users.role.create' => [
        'liro-users::module.role.create', 'Liro\Users\Routers\RoleRouter@create'
    ],

    'admin@liro-users.role.edit' => [
        'liro-users::module.role.edit', 'Liro\Users\Routers\RoleRouter@edit'
    ]

];