<?php

return [
    
    'name'      => 'Language',
    'version'   => '0.0.1',
    'alias'     => 'liro.language',

    'autoload' => [
        'Liro\\Language\\' => ''
    ],

    'events' => [

        'frontend.route' => function($app) {
            dd('route frontend!');
        },

        'backend.route' => function($app) {
            require('route.php');
        }

    ]
    
];