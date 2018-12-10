<?php

return [

    '!user@liro-menus.user.redirect.menu' => [
        'liro-menus::user.redirect.menu', 'Liro\Menus\Routers\User\RedirectRouter@menu'
    ],

    '!user@liro-menus.user.redirect.url' => [
        'liro-menus::user.redirect.url', 'Liro\Menus\Routers\User\RedirectRouter@url'
    ],

    'ajax@liro-menus.ajax.menu.index' => [
        'liro-menus::ajax.menu.index', 'Liro\Menus\Routers\Ajax\MenuRouter@index'
    ],

    'ajax@liro-menus.ajax.menu.show' => [
        'liro-menus::ajax.menu.show', 'Liro\Menus\Routers\Ajax\MenuRouter@show'
    ],

    'ajax@liro-menus.ajax.menu.store' => [
        'liro-menus::ajax.menu.create', 'Liro\Menus\Routers\Ajax\MenuRouter@store'
    ],

    'ajax@liro-menus.ajax.menu.update' => [
        'liro-menus::ajax.menu.edit', 'Liro\Menus\Routers\Ajax\MenuRouter@update'
    ],

    'ajax@liro-menus.ajax.menu.order' => [
        'liro-menus::ajax.menu.edit', 'Liro\Menus\Routers\Ajax\MenuRouter@order'
    ],

    'admin@liro-menus.admin.menu.index' => [
        'liro-menus::admin.menu.index', 'Liro\Menus\Routers\Admin\MenuRouter@index'
    ],

    'admin@liro-menus.admin.menu.create' => [
        'liro-menus::admin.menu.create', 'Liro\Menus\Routers\Admin\MenuRouter@create'
    ],

    'admin@liro-menus.admin.menu.edit' => [
        'liro-menus::admin.menu.edit', 'Liro\Menus\Routers\Admin\MenuRouter@edit'
    ],

    'ajax@liro-menus.ajax.type.index' => [
        'liro-menus::ajax.type.index', 'Liro\Menus\Routers\Ajax\TypeRouter@index'
    ],

    'ajax@liro-menus.ajax.type.show' => [
        'liro-menus::ajax.type.show', 'Liro\Menus\Routers\Ajax\TypeRouter@show'
    ],

    'ajax@liro-menus.ajax.type.store' => [
        'liro-menus::ajax.type.create', 'Liro\Menus\Routers\Ajax\TypeRouter@store'
    ],

    'ajax@liro-menus.ajax.type.update' => [
        'liro-menus::ajax.type.edit', 'Liro\Menus\Routers\Ajax\TypeRouter@update'
    ],

    'admin@liro-menus.admin.type.index' => [
        'liro-menus::admin.type.index', 'Liro\Menus\Routers\Admin\TypeRouter@index'
    ],

    'admin@liro-menus.admin.type.create' => [
        'liro-menus::admin.type.create', 'Liro\Menus\Routers\Admin\TypeRouter@create'
    ],

    'admin@liro-menus.admin.type.edit' => [
        'liro-menus::admin.type.edit', 'Liro\Menus\Routers\Admin\TypeRouter@edit'
    ]

];