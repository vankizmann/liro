<?php

return [

    'name' => 'liro-users',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'middleware' => [
        'role' => Liro\Users\Middleware\CheckUserRole::class,
        'route' => Liro\Users\Middleware\CheckUserRoute::class
    ],

    'routes' => [

        'backend.auth.login' => function($router) {
            $router->middleware(['web'])->get('/', 'Liro\Users\Controllers\Backend\AuthController@login');
            $router->middleware(['web'])->post('/', 'Liro\Users\Controllers\Backend\AuthController@submit');
        },

        'backend.auth.logout' => function($router) {
            $router->middleware(['web'])->get('/', 'Liro\Users\Controllers\Backend\AuthController@logout');
        },

        'backend.users.index' => function($router) {
            $router->middleware(['web', 'route'])->get('/', 'Liro\Users\Controllers\Backend\UserController@index');
        },

        'backend.users.create' => function($router) {
            $router->middleware(['web', 'route'])->get('/', 'Liro\Users\Controllers\Backend\UserController@create');
            $router->middleware(['web', 'route'])->post('/', 'Liro\Users\Controllers\Backend\UserController@store');
        },

        'backend.users.edit' => function($router) {
            $router->middleware(['web', 'route'])->get('{user}', 'Liro\Users\Controllers\Backend\UserController@edit');
            $router->middleware(['web', 'route'])->post('{user}', 'Liro\Users\Controllers\Backend\UserController@update');
        },

        'backend.users.enable' => function($router) {
            $router->middleware(['web', 'route'])->get('{user}', 'Liro\Users\Controllers\Backend\UserController@enable');
        },

        'backend.users.disable' => function($router) {
            $router->middleware(['web', 'route'])->get('{user}', 'Liro\Users\Controllers\Backend\UserController@disable');
        },

        'backend.roles.index' => function($router) {
            $router->middleware(['web', 'route'])->get('/', 'Liro\Users\Controllers\Backend\RoleController@index');
        },

        'backend.roles.create' => function($router) {
            $router->middleware(['web', 'route'])->get('/', 'Liro\Users\Controllers\Backend\RoleController@create');
            $router->middleware(['web', 'route'])->post('/', 'Liro\Users\Controllers\Backend\RoleController@store');
        },

        'backend.roles.edit' => function($router) {
            $router->middleware(['web', 'route'])->get('{role}', 'Liro\Users\Controllers\Backend\RoleController@edit');
            $router->middleware(['web', 'route'])->post('{role}', 'Liro\Users\Controllers\Backend\RoleController@update');
        }

    ]

];
