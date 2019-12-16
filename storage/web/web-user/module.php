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
            'web-user::js/web-user.js'
        ],

        'WebUserEdit' => [
            'web-user::js/web-user.js'
        ],

        'WebUserShow' => [
            'web-user::js/web-user.js'
        ]

    ],

    'routes' => [

        'ajax@web-user::user' => [
            Liro\Web\User\Http\Controllers\UserController::class,
        ],

    ],

];
