<?php

return [

    'liro-users.ajax.auth.login' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Ajax\AuthController@login',
        'method' => 'post'
    ],

    'liro-users.admin.auth.login' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\AuthController@login',
        'method' => 'get'
    ],

    'liro-users.admin.auth.logout' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\AuthController@logout',
        'method' => 'get'
    ],

    'liro-users.ajax.user' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Ajax\UserController',
        'method' => 'resource'
    ],

    'liro-users.admin.user.index' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\UserController@index',
        'method' => 'get'
    ],

    'liro-users.admin.user.create' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\UserController@create',
        'method' => 'get'
    ],

    'liro-users.admin.user.edit' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\UserController@edit',
        'method' => 'get'
    ],

    'liro-users.ajax.role' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Ajax\RoleController',
        'method' => 'resource'
    ],

    'liro-users.admin.role.index' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\RoleController@index',
        'method' => 'get'
    ],

    'liro-users.admin.role.create' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\RoleController@create',
        'method' => 'get'
    ],

    'liro-users.admin.role.edit' => [
        'uses' => 'Liro\Extension\Users\Http\Controllers\Admin\RoleController@edit',
        'method' => 'get'
    ]

];
