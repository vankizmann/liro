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

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\UserController@index');
            });

        },

        'backend.users.create' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\UserController@create');
                $router->post('/', 'Liro\Users\Controllers\Backend\UserController@store');
            });

        },

        'backend.users.edit' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('{id}', 'Liro\Users\Controllers\Backend\UserController@edit');
                $router->post('{id}', 'Liro\Users\Controllers\Backend\UserController@update');
            });

        },

        'backend.users.enable' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('{id}', 'Liro\Users\Controllers\Backend\UserController@enable');
            });

        },

        'backend.users.disable' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('{id}', 'Liro\Users\Controllers\Backend\UserController@disable');
            });

        },

        'backend.roles.index' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\RoleController@index');
            });

        },

        'backend.roles.create' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\RoleController@create');
                $router->post('/', 'Liro\Users\Controllers\Backend\RoleController@store');
            });

        },

        'backend.roles.edit' => function($router) {

            return $router->middleware(['web', 'route'])->group(function($router) {
                $router->get('{id}', 'Liro\Users\Controllers\Backend\RoleController@edit');
                $router->post('{id}', 'Liro\Users\Controllers\Backend\RoleController@update');
            });

        }

    ]

];
