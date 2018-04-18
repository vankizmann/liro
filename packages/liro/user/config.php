<?php

return [

    'name'      => 'User',
    'version'   => '0.0.1',
    'alias'     => 'liro.user',

    'autoload' => [
        'Liro\\User\\' => ''
    ],

    'events' => [

        'factory.boot' => function($app) {
            $app['router']
                ->get('login', 'Liro\User\Controller\AuthenticateController@form')
                ->middleware(['web', 'guest'])->name('login');

            $app['router']
                ->post('login', 'Liro\User\Controller\AuthenticateController@login')
                ->middleware(['web', 'guest']);
                
            $app['router']
                ->get('logout', 'Liro\User\Controller\AuthenticateController@logout')
                ->middleware(['web', 'auth'])->name('logout');
        },

        'frontend.route' => function($app) {
            dd('route frontend!');
        },

        'backend.route' => function($app) {
            require('route.php');
        }

    ]

];