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


    'admin@liro-users.user.index' => [
        'liro-users::module.user.index', 'Liro\Users\Routers\UserRouter@index'
    ],

    'admin@liro-users.user.create' => [
        'liro-users::module.user.create', 'Liro\Users\Routers\UserRouter@create'
    ],

    'admin@liro-users.user.edit' => [
        'liro-users::module.user.edit', 'Liro\Users\Routers\UserRouter@edit'
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