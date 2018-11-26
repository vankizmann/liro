<?php

use Liro\System\Modules\Models\Module;

return [

    'name'          => 'liro-users',
    'version'       => '0.0.1',
    'type'          => 'app-module',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'events' => [

        'app.boot' => function () {

            app('scripts')->addRoutes([
                'liro-users.auth.login',
                'liro-users.auth.token'
            ]);
    
            app('scripts')->addMessages([
                'liro-users::form',
                'liro-users::message'
            ]);
    
            app('scripts')->addLink(
                'liro-auth', 'liro-users::dist/liro-auth.js', ['theme-script']
            );

        }

    ]

];
