<?php

use Liro\System\Cms\Models\Module;

return [

    'name'    => 'liro-user33s',
    'version' => '0.0.1',
    'type'    => 'app-module',

    'autoload' => [
        'Liro\\Users\\' => 'src/',
    ],

    'events' => [

        'app.boot' => function () {

            $auth = [
                'scripts' => [
                    'liro-users::dist/liro-auth.js'
                ],
                'modules' => [
                    'liro-auth-login'
                ]
            ];

            app('assets')->module('liro-auth', $auth, ['theme-script']);

            $user = [
                'scripts' => [
                    'liro-users::dist/liro-user.js'
                ],
                'modules' => [
                    'liro-user-index', 'liro-user-create', 'liro-user-edit'
                ]
            ];

            app('assets')->module('liro-user', $user, ['theme-script']);

            app('assets')->routes([
                'liro-users.ajax.auth.login', 'liro-users.ajax.auth.token',
            ]);

            app('assets')->locales([
                'liro-users::form', 'liro-users::message',
            ]);

        },

    ],

];
