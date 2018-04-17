<?php

return [

    'info' => [
        'name'      => 'Package',
        'version'   => '0.0.1',
    ],

    'autoload' => [
        'Liro\\Package\\' => ''
    ],

    'events' => [

        'frontend/route' => function($app) {
            // dd('route frontend!');
        },

        'backend/route' => function($app) {
            // dd('route backend!');
        }

    ]

];