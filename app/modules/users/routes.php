<?php

return [

    'liro-users.auth.login' => [
        'liro-users::module.auth.login', 'Liro\Users\Routers\AuthRouter@login'
    ],

    'liro-users.auth.logout' => [
        'liro-users::module.auth.logout', 'Liro\Users\Routers\AuthRouter@logout'
    ],

    'liro-users.user.index' => [
        'liro-users::module.user.index', 'Liro\Users\Routers\UserRouter@index'
    ],

    'liro-users.user.create' => [
        'liro-users::module.user.create', 'Liro\Users\Routers\UserRouter@create'
    ],

    'liro-users.user.edit' => [
        'liro-users::module.user.edit', 'Liro\Users\Routers\UserRouter@edit'
    ],

    'liro-users.role.index' => [
        'liro-users::module.role.index', 'Liro\Users\Routers\RoleRouter@index'
    ],

    'liro-users.role.create' => [
        'liro-users::module.role.create', 'Liro\Users\Routers\RoleRouter@create'
    ],

    'liro-users.role.edit' => [
        'liro-users::module.role.edit', 'Liro\Users\Routers\RoleRouter@edit'
    ]

];