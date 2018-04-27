<?php

return [
    
    'name'        => 'users',

    'autoload' => [
        'System\\Users\\' => ''
    ],

    'events' => [
        'liro.factory.boot' => 'System\Users\Events\LiroSubscriber@subscribe'
    ],

    'backend' => [

        'index' => function($router) {

            $router->get('/', [
                'uses' => 'System\Users\Controllers\Backend\UserController@index',
                'as' => 'users.index'
            ]);

            $router->get('create', [
                'uses' => 'System\Users\Controllers\Backend\UserController@create',
                'as' => 'users.create'
            ]);

            $router->post('create', [
                'uses' => 'System\Users\Controllers\Backend\UserController@store',
                'as' => 'users.store'
            ]);

            $router->get('{id}/edit', [
                'uses' => 'System\Users\Controllers\Backend\UserController@edit',
                'as' => 'users.edit'
            ]);

            $router->post('{id}/edit', [
                'uses' => 'System\Users\Controllers\Backend\UserController@update',
                'as' => 'users.update'
            ]);

        }

    ],

    'frontend' => [

        'index' => function($router) {
            $router->middleware(['web'])->get('/', 'System\Users\Controllers\Frontend\UserController@index');
        }

    ]

];
