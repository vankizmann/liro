<?php

return [

    'name'          => 'web-user',
    'version'       => '1.0.0',
    'type'          => 'package',

    'routes' => [

        'ajax@web-user::user' => [
            Liro\Web\User\Http\Controllers\UserController::class
        ],

        'http@web-user::user' => [
            Liro\Web\User\Http\Connectors\UserConnector::class
        ],

    ],

    'autoload' => [
        'Liro\\Web\\User\\' => 'src/'
    ],


];
