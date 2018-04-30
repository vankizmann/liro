<?php

return [

    'name' => 'liro.menus',

    'autoload' => [
        'Liro\\Menus\\' => 'src/'
    ],

    'routes' => [

        'backend.menus' => function($app) {

            $app['router']
                ->middleware('role:admin')->name('backend.menus.index')
                ->get('/', 'Liro\Menus\Controllers\BackendMenuController@index');

            $app['router']
                ->middleware('role:admin')->name('backend.menus.create')
                ->get('create', 'Liro\Menus\Controllers\BackendMenuController@create');
    
        }

    ]

];
