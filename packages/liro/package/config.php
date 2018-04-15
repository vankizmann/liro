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

        'frontend/route' => function($router) {
            // Route frontend
        },

        'backend/route' => function($router) {
            // Route backend
        },

        'element/register' => function($element) {
            // Route frontend
        }

    ]

];