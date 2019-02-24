<?php

return [

    'liro-users.ajax.auth.login' => [
        'controller' => 'Liro\Extension\Users\Controllers\Ajax\AuthController@login',
        'methods' => ['post']
    ],

    'liro-users.admin.auth.login' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\AuthController@login',
        'methods' => ['get']
    ],

    'liro-users.admin.auth.logout' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\AuthController@logout',
        'methods' => ['get']
    ],

    'liro-users.ajax.user' => [
        'controller' => 'Liro\Extension\Users\Controllers\Ajax\UserController',
        'methods' => ['resource']
    ],

    'liro-users.admin.user.index' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\UserController@index',
        'methods' => ['get']
    ],

    'liro-users.admin.user.create' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\UserController@create',
        'methods' => ['get']
    ],

    'liro-users.admin.user.edit' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\UserController@edit',
        'methods' => ['get']
    ],

    'liro-users.ajax.role' => [
        'controller' => 'Liro\Extension\Users\Controllers\Ajax\RoleController',
        'methods' => ['resource']
    ],

    'liro-users.admin.role.index' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\RoleController@index',
        'methods' => ['get']
    ],

    'liro-users.admin.role.create' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\RoleController@create',
        'methods' => ['get']
    ],

    'liro-users.admin.role.edit' => [
        'controller' => 'Liro\Extension\Users\Controllers\Admin\RoleController@edit',
        'methods' => ['get']
    ]

];
