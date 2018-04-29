<?php

return [

    'name' => 'system.users',

    'autoload' => [
        'Liro\\System\\Users\\' => 'src/'
    ],

    'middleware' => [
        'role' => Liro\System\Users\Middleware\CheckUserRole::class
    ]

];
