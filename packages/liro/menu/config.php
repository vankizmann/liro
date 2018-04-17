<?php

return [

    'name'      => 'Menu',
    'version'   => '0.0.1',
    'view'      => 'liro.menu',

    'autoload' => [
        'Liro\\Menu\\' => ''
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