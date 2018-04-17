<?php

return [

    'name'      => 'User',
    'version'   => '0.0.1',
    'view'      => 'liro.user',

    'autoload' => [
        'Liro\\User\\' => ''
    ],

    'events' => [

        'frontend/route' => function($app) {
            dd('route frontend!');
        },

        'backend/route' => function($app) {
            require('route.php');
        }

    ]

];