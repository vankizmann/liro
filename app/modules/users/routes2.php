<?php

return [

    'groups' => [

        'liro-users.backend.auth' => [
            'title' => trans('liro-users.backend.auth.group')
        ],

        'liro-users.backend.users' => [
            'title' => trans('liro-users.backend.users.group')
        ],

        'liro-users.backend.roles' => [
            'title' => trans('liro-users.backend.roles.group')
        ]

    ],

    'routes' => [

        'liro-users.backend.auth.login' => [
            'group'         => 'liro-users.backend.auth',
            'title'         => trans('liro-users.backend.auth.login'),
            'handler'       => 'Liro\Users\Routers\AuthRouter@login'
        ],

        'liro-users.backend.auth.logout' => [
            'group'         => 'liro-users.backend.auth',
            'title'         => trans('liro-users.backend.auth.logout'),
            'handler'       => 'Liro\Users\Routers\AuthRouter@logout'
        ],

        'liro-users.backend.users.index' => [
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.index'),
            'handler'       => 'Liro\Users\Routers\UserRouter@index'
        ],

        'liro-users.backend.users.create' => [
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.create'),
            'handler'       => 'Liro\Users\Routers\UserRouter@create'
        ],

        'liro-users.backend.users.edit' => [
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.edit'),
            'handler'       => 'Liro\Users\Routers\UserRouter@edit'
        ],

        'liro-users.backend.users.delete' => [
            'hidden'        => true,
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.delete'),
            'handler'       => 'Liro\Users\Routers\UserRouter@delete'
        ],

        'liro-users.backend.users.enable' => [
            'hidden'        => true,
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.enable'),
            'handler'       => 'Liro\Users\Routers\UserRouter@enable'
        ],

        'liro-users.backend.users.disable' => [
            'hidden'        => true,
            'group'         => 'liro-users.backend.users',
            'title'         => trans('liro-users.backend.users.disable'),
            'handler'       => 'Liro\Users\Routers\UserRouter@disable'
        ],

        'liro-users.backend.roles.index' => [
            'group'         => 'liro-users.backend.roles',
            'title'         => trans('liro-users.backend.roles.index'),
            'handler'       => 'Liro\Users\Routers\RoleRouter@index'
        ],

        'liro-users.backend.roles.create' => [
            'group'         => 'liro-users.backend.roles',
            'title'         => trans('liro-users.backend.roles.create'),
            'handler'       => 'Liro\Users\Routers\RoleRouter@create'
        ],

        'liro-users.backend.roles.edit' => [
            'group'         => 'liro-users.backend.roles',
            'title'         => trans('liro-users.backend.roles.edit'),
            'handler'       => 'Liro\Users\Routers\RoleRouter@edit'
        ],

        'liro-users.backend.roles.delete' => [
            'hidden'        => true,
            'group'         => 'liro-users.backend.roles',
            'title'         => trans('liro-users.backend.roles.delete'),
            'handler'       => 'Liro\Users\Routers\RoleRouter@delete'
        ]

    ]

];