<?php

return [

    'name'          => 'web-auth',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\Auth\\' => 'src/'
    ],

    'imports' => [

        'WebAuthLogin' => [
            'web-auth::js/web-auth.js'
        ],

        'WebAuthLogout' => [
            'web-auth::js/web-auth.js'
        ],

        'WebAuthUser' => [
            'web-auth::js/web-auth.js'
        ],

    ],

    'routes' => [

        'ajax@web-auth::auth' => [
            Liro\Web\Auth\Http\Controllers\AuthController::class,
        ],

        'http@web-auth::login' => [
            Liro\Web\Auth\Http\Connectors\LoginConnector::class,
        ],

    ],

];
