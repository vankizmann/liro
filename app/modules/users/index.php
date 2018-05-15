<?php

return [

    'name' => 'liro-users',

    'autoload' => [
        'Liro\\Users\\' => 'src/'
    ],

    'middleware' => [
        'role' => Liro\Users\Middleware\CheckUserRole::class,
        'route' => Liro\Users\Middleware\CheckUserRoute::class
    ]

];
