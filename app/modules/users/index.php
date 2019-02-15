<?php

use Liro\System\Modules\Models\Module;

return [

    'name'    => 'liro-users',
    'version' => '0.0.1',
    'type'    => 'app-module',

    'autoload' => [
        'Liro\\Users\\' => 'src/',
    ],

    'events' => [

        'app.boot' => function () {

            app('assets')->module('liro-auth', [
                'scripts' => [
                    'liro-users::dist/liro-auth.js'
                ],
                'modules' => [
                    'liro-auth-login'
                ]
            ], ['theme-script']);

            app('assets')->routes([
                'liro-users.ajax.auth.login', 'liro-users.ajax.auth.token',
            ]);

            app('assets')->locales([
                'liro-users::form', 'liro-users::message',
            ]);

        },

    ],

];
