<?php

return [

    'name'          => 'liro-menus',
    'version'       => '0.0.1',
    'type'          => 'extension',

    'autoload' => [
        'Liro\\Extension\\Menus\\' => 'src/'
    ],

    'providers' => [
        Liro\Extension\Menus\Providers\MenuServiceProvider::class
    ]

];
