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
            'web-user::dist/js/web-user.js',
            'web-user::dist/css/web-user.css'
        ],

        'WebUserEdit' => [
            'web-user::dist/js/web-user.js',
            'web-user::dist/css/web-user.css'
        ],

        'WebUserShow' => [
            'web-user::dist/js/web-user.js',
            'web-user::dist/css/web-user.css'
        ]

    ],

    'routes' => [

//        'ajax2@web-user::user' => [
//            Liro\Web\User\Http\Controllers\AjaxUserController::class,
//        ],
//
//        'http2@web-user::user' => [
//            Liro\Web\User\Http\Connectors\HttpUserConnector::class
//        ],

    ],

];
