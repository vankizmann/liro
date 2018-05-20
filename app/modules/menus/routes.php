<?php

return [

    'groups' => [

        'liro-menus.backend.menus' => [
            'title' => 'liro-menus.backend.menus.group'
        ],

        'liro-menus.backend.types' => [
            'title' => 'liro-menus.backend.types.group'
        ],

        'liro-menus.backend.redirect' => [
            'title' => 'liro-menus.backend.redirect.group'
        ]

    ],

    'routes' => [

        'liro-menus.backend.menus.index' => [
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.index',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@index'
        ],

        'liro-menus.backend.menus.order' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.order',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@order'
        ],

        'liro-menus.backend.menus.create' => [
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.create',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@create'
        ],

        'liro-menus.backend.menus.edit' => [
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.edit',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@edit'
        ],

        'liro-menus.backend.menus.delete' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.delete',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@delete'
        ],

        'liro-menus.backend.menus.enable' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.enable',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@enable'
        ],

        'liro-menus.backend.menus.disable' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.disable',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@disable'
        ],

        'liro-menus.backend.menus.visible' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.visible',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@visible'
        ],

        'liro-menus.backend.menus.hidden' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => 'liro-menus.backend.menus.hidden',
            'handler'       => 'Liro\Menus\Routers\MenuRouter@hidden'
        ],

        'liro-menus.backend.types.index' => [
            'group'         => 'liro-menus.backend.types',
            'title'         => 'liro-menus.backend.types.index',
            'handler'       => 'Liro\Menus\Routers\TypeRouter@index'
        ],

        'liro-menus.backend.types.create' => [
            'group'         => 'liro-menus.backend.types',
            'title'         => 'liro-menus.backend.types.create',
            'handler'       => 'Liro\Menus\Routers\TypeRouter@create'
        ],

        'liro-menus.backend.types.edit' => [
            'group'         => 'liro-menus.backend.types',
            'title'         => 'liro-menus.backend.types.edit',
            'handler'       => 'Liro\Menus\Routers\TypeRouter@edit'
        ],

        'liro-menus.backend.types.delete' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.types',
            'title'         => 'liro-menus.backend.types.delete',
            'handler'       => 'Liro\Menus\Routers\TypeRouter@delete'
        ],

        'liro-menus.backend.redirect.menu' => [
            'group'         => 'liro-menus.backend.redirect',
            'title'         => 'liro-menus.backend.redirect.menu',
            'handler'       => 'Liro\Menus\Routers\RedirectRouter@menu'
        ],

        'liro-menus.backend.redirect.link' => [
            'group'         => 'liro-menus.backend.redirect',
            'title'         => 'liro-menus.backend.redirect.link',
            'handler'       => 'Liro\Menus\Routers\RedirectRouter@link'
        ]

    ]

];
