<?php

return [

    'name' => 'system.menus',

    'autoload' => [
        'Liro\\System\\Menus\\' => 'src/'
    ],

    'alias' => [
        'menus' => Liro\System\Menus\MenuManager::class
    ],

    'loader' => [
        Liro\System\Menus\Loaders\MenuLoader::class
    ],

    'events' => [

        'boot' => function($app) {
            $app['menus']->register()->load();
        }

    ]

];
