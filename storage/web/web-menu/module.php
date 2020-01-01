<?php

return [

    'name'          => 'web-menu',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\Menu\\' => 'src/'
    ],

    'providers' => [
        \Liro\Web\Menu\MenuServiceProvider::class
    ],

    'imports' => [

        'WebMenuTree' => [
            'web-menu::js/web-menu.js'
        ],

        'WebMenuIndex' => [
            'web-menu::js/web-menu.js'
        ],

        'WebMenuEdit' => [
            'web-menu::js/web-menu.js'
        ],

        'WebMenuShow' => [
            'web-menu::js/web-menu.js'
        ]

    ],

    'routes' => [

        'ajax@web-menu::menu' => [
            Liro\Web\Menu\Http\Controllers\MenuController::class
        ],

        'http@web-menu::domain' => [
            Liro\Web\Menu\Http\Connectors\DomainConnector::class
        ],

        'http@web-menu::menu' => [
            Liro\Web\Menu\Http\Connectors\MenuConnector::class
        ],

        'http@web-menu::redirect' => [
            Liro\Web\Menu\Http\Connectors\RedirectConnector::class
        ],

        'http@web-menu::vue' => [
            Liro\Web\Menu\Http\Connectors\VueConnector::class
        ],

    ],

];
