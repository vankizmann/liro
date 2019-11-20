<?php

return [

    'name'          => 'web-menu',
    'version'       => '1.0.0',
    'type'          => 'package',

    'routes' => [

        'http@web-menu::domain' => [
            Liro\Web\Menu\Http\Connectors\DomainConnector::class
        ],

        'http@web-menu::menu' => [
            Liro\Web\Menu\Http\Connectors\MenuConnector::class
        ],

        'http@web-menu::redirect' => [
            Liro\Web\Menu\Http\Connectors\RedirectConnector::class
        ],

    ],

    'autoload' => [
        'Liro\\Web\\Menu\\' => 'src/'
    ],

];
