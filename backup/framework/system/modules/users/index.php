<?php

return [

    'name'          => 'liro-users',
    'version'       => '1.0.0',
    'type'          => 'extension',

    'autoload' => [
        'Liro\\Extension\\Users\\' => 'src/'
    ],

    'providers' => [
        Liro\Extension\Users\Providers\UserServiceProvider::class
    ]

];
