<?php

return [

    'name' => 'liro.users',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'middleware' => [
        'role' => Liro\Users\Middleware\CheckUserRole::class,
        'route' => Liro\Users\Middleware\CheckUserRoute::class
    ],

    'routes' => [

        'backend.auth.login' => function($router) {

            return $router->middleware(['web'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\AuthController@login');
                $router->post('/', 'Liro\Users\Controllers\Backend\AuthController@submit');
            });

        },

        'backend.auth.logout' => function($router) {

            return $router->middleware(['web'])->group(function($router) {
                $router->get('/', 'Liro\Users\Controllers\Backend\AuthController@logout');
            });

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
                $router->get('/{id}', 'Liro\Users\Controllers\Backend\UserController@edit');
                $router->post('/{id}', 'Liro\Users\Controllers\Backend\UserController@update');
            });

        }

    ]

];
