<?php

return [

    'name'          => 'liro/web-users',
    'version'       => '1.0.0',
    'type'          => 'package',

    'routes' => [

        'ajax@web-users::user' => [
            Liro\Web\User\Http\Controllers\UserController::class
        ],

        'http@web-users::user' => [
            Liro\Web\User\Http\Connectors\UserConnector::class
        ],

    ],

    'autoload' => [
        'Liro\\Web\\User\\' => 'src/'
    ],


];
