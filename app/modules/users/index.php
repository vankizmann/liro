<?php

return [

    'name' => 'liro.users',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'middleware' => [
        'role' => Liro\Users\Middleware\CheckUserRole::class
    ],

    'routes' => [

        'backend.login' => function($app) {

            $app['router']
                ->name('backend.users.login')
                ->get('/', 'Liro\Users\Controllers\Backend\AuthController@login');

            $app['router']
                ->post('/', 'Liro\Users\Controllers\Backend\AuthController@submit');

        },

        'backend.logout' => function($app) {

            $app['router']
                ->name('backend.users.logout')
                ->get('/', 'Liro\Users\Controllers\Backend\AuthController@logout');

        },

        'backend.users' => function($app) {

            $app['router']
                ->middleware('role:admin')->name('backend.users.index')
                ->get('/', 'Liro\Users\Controllers\Backend\UserController@index');

            $app['router']
                ->middleware('role:admin')->name('backend.users.create')
                ->get('create', 'Liro\Users\Controllers\Backend\UserController@create');

            $app['router']
                ->middleware('role:admin')->name('backend.users.edit')
                ->get('{id}/edit', 'Liro\Users\Controllers\Backend\UserController@edit');
    
        },

        'frontend.login' => function($app) {

            $app['router']
                ->name('frontend.users.login')
                ->get('/', 'Liro\Users\Controllers\Frontend\AuthController@login');

            $app['router']
                ->post('/', 'Liro\Users\Controllers\Frontend\AuthController@submit');

        },

        'frontend.logout' => function($app) {

            $app['router']
                ->name('frontend.users.logout')
                ->get('/', 'Liro\Users\Controllers\Frontend\AuthController@logout');

        },

    ]

];
