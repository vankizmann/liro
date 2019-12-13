<?php

return [

    'name'          => 'web-user',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\User\\' => 'src/'
    ],

    'vue' => [

        'WebUserIndex' => [
            'web-user::js/web-user.js',
            'web-user::css/web-user.css'
        ],

        'WebUserEdit' => [
            'web-user::js/web-user.js',
            'web-user::css/web-user.css'
        ],

        'WebUserShow' => [
            'web-user::js/web-user.js',
            'web-user::css/web-user.css'
        ]

    ],

    'routes' => [

        'ajax@web-user::user' => [
            Liro\Web\User\Http\Controllers\UserController::class,
        ],

    ],

];
