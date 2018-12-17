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

            app('assets')->routes([
                'liro-users.ajax.auth.login', 'liro-users.ajax.auth.token'
            ]);
    
            app('assets')->messages([
                'liro-users::form', 'liro-users::message'
            ]);
    
            app('assets')->script(
                'liro-auth', 'liro-users::dist/liro-auth.js', ['theme-script']
            );

        }

    ]

];
