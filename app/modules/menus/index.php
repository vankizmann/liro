<?php

return [

    'name' => 'liro-menus',

    'autoload' => [
        'Liro\\Menus\\' => 'src/'
    ],

    'routes' => [

        'backend.menus.index' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\MenuController@index');
        },

        'backend.menus.order' => function($router) {
            $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\Backend\MenuController@order');
        },

        'backend.menus.create' => function($router) {
            $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\MenuController@create');
            $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\Backend\MenuController@store');
        },

        'backend.menus.edit' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@edit');
            $router->middleware('web', 'route')->post('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@update');
        },

        'backend.menus.delete' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@delete');
        },

        'backend.menus.enable' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@enable');
        },

        'backend.menus.disable' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@disable');
        },

        'backend.menus.show' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@show');
        },

        'backend.menus.hide' => function($router) {
            $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@hide');
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

        'backend.types.delete' => function($router) {
            $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\Backend\TypeController@delete');
        },

    ]

];
