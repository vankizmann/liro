<?php

return [

    'name' => 'liro.menus',

    'autoload' => [
        'Liro\\Menus\\' => 'src/'
    ],

    'routes' => [

        'backend.index' => function($app) {
            $app['router']->middleware('role:admin')->get('/', 'Liro\Menus\Controllers\BackendMenuController@index');
        }

    ]

];
