<?php

return [

    'name' => 'liro.users',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'routes' => [

        'backend.login' => function($app) {
            $app['router']->get('/', 'Liro\Users\Controllers\BackendAuthController@login')->name('backend.login');
        }

    ]

];
