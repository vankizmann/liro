<?php

use Illuminate\Support\Facades\Redirect;

return [

    'name'          => 'system-menus',
    'version'       => '0.0.1',
    'type'          => 'system-module',

    'autoload' => [
        'Liro\\System\\Menus\\' => 'src/'
    ],

    'alias' => [
        'menus' => Liro\System\Menus\Managers\MenuManager::class
    ]

];
