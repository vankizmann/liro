<?php

return [

    'liro-menus.redirect.menu' => [
        'liro-menus::module.redirect.menu', 'Liro\Menus\Routers\RedirectRouter@menu'
    ],

    'liro-menus.redirect.url' => [
        'liro-menus::module.redirect.url', 'Liro\Menus\Routers\RedirectRouter@url'
    ],

    'liro-menus.menu.index' => [
        'liro-menus::module.menu.index', 'Liro\Menus\Routers\MenuRouter@index'
    ],

    'liro-menus.menu.create' => [
        'liro-menus::module.menu.create', 'Liro\Menus\Routers\MenuRouter@create'
    ],

    'liro-menus.menu.edit' => [
        'liro-menus::module.menu.edit', 'Liro\Menus\Routers\MenuRouter@edit'
    ],

    'liro-menus.type.index' => [
        'liro-menus::module.type.index', 'Liro\Menus\Routers\TypeRouter@index'
    ],

    'liro-menus.type.create' => [
        'liro-menus::module.type.create', 'Liro\Menus\Routers\TypeRouter@create'
    ],

    'liro-menus.type.edit' => [
        'liro-menus::module.type.edit', 'Liro\Menus\Routers\TypeRouter@edit'
    ]

];