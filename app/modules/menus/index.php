<?php

return [

    'name' => 'liro.menus',

    'autoload' => [
        'Liro\\Menus\\' => 'src/'
    ],

    'routes' => [

        'backend.menus.index' => function($router) {
            return $router->middleware(['web', 'route'])->get('/', 'Liro\Menus\Controllers\BackendMenuController@index');
        },

        'backend.menus.order' => function($router) {
            return $router->middleware(['web', 'route:liro.menus.backend.menus.index'])->post('/', 'Liro\Menus\Controllers\BackendMenuController@order');
        },

        'backend.menus.create' => function($router) {
            return $router->middleware(['web', 'route'])->get('/', 'Liro\Menus\Controllers\BackendMenuController@create');
        },

        'backend.menus.edit' => function($router) {
            return $router->middleware(['web', 'route'])->get('{id}', 'Liro\Menus\Controllers\BackendMenuController@edit');
        }

    ]

];
