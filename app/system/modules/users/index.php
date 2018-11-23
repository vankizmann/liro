<?php

return [

    'name'          => 'system-users',
    'version'       => '0.0.1',
    'type'          => 'system-module',

    'autoload' => [
        'Liro\\System\\Users\\' => 'src/'
    ],

    'alias' => [
        'users' => Liro\System\Users\Managers\UserManager::class
    ],

    'middleware' => [
        'route' => Liro\System\Users\Middleware\CheckUserRoleRoute::class
    ]

];
