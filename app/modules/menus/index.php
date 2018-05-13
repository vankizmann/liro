<?php

return [

    'name' => 'liro-menus',

    'autoload' => [
        'Liro\\Menus\\' => 'src/'
    ],

    'routes' => [

        'backend.menus.index' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\BackendMenuController@index');
        },

        'backend.menus.order' => function($router) {
            $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\BackendMenuController@order');
        },

        'backend.menus.create' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\BackendMenuController@create');
            $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\Backend\MenuController@store');
        },

        'backend.menus.edit' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\BackendMenuController@edit');
            $router->middleware('web', 'route')->post('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@update');
        },

        'backend.types.index' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\TypeController@index');
        },

        'backend.types.create' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\TypeController@create');
            $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\Backend\TypeController@store');
        },

        'backend.types.edit' => function($router) {
            $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\Backend\TypeController@edit');
            $router->middleware('web', 'route')->post('{type}', 'Liro\Menus\Controllers\Backend\TypeController@update');
        },

    ]

];
