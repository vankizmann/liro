<?php

return [

    'name' => 'system.test',

    'routes' => [

        'backend.home' => function($app) {

            $app['router']->get('/', function() {
                return 'LOL YAY!';
            });

            $app['router']->get('penis', function() {
                return 'PENIS!';
            });

        }

    ]
];
