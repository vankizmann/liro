<?php

return [

    'groups' => [

        'liro-menus.backend.menus' => [
            'title' => trans('liro-menus.backend.menus.group')
        ],

        'liro-menus.backend.types' => [
            'title' => trans('liro-menus.backend.types.group')
        ]

    ],

    'routes' => [

        'liro-menus.backend.menus.index' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.index'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@index'
        ],

        'liro-menus.backend.menus.order' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.order'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@index'
        ],

        'liro-menus.backend.menus.create' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.create'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@create'
        ],

        'liro-menus.backend.menus.edit' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.edit'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@edit'
        ],

        'liro-menus.backend.menus.delete' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.delete'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@delete'
        ],

        'liro-menus.backend.menus.enable' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.enable'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@enable'
        ],

        'liro-menus.backend.menus.disable' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.disable'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@disable'
        ],

        'liro-menus.backend.menus.visible' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.visible'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@visible'
        ],

        'liro-menus.backend.menus.hidden' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.menus',
            'title'         => trans('*.liro-menus.backend.menus.hidden'),
            'handler'       => 'Liro\Menus\Routers\MenuRouter@hidden'
        ],

        'liro-menus.backend.types.index' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.types',
            'title'         => trans('*.liro-menus.backend.types.index'),
            'handler'       => 'Liro\Menus\Routers\TypeRouter@index'
        ],

        'liro-menus.backend.types.create' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.types',
            'title'         => trans('*.liro-menus.backend.types.create'),
            'handler'       => 'Liro\Menus\Routers\TypeRouter@create'
        ],

        'liro-menus.backend.types.edit' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.types',
            'title'         => trans('*.liro-menus.backend.types.edit'),
            'handler'       => 'Liro\Menus\Routers\TypeRouter@edit'
        ],

        'liro-menus.backend.types.delete' => [
            'hidden'        => true,
            'group'         => 'liro-menus.backend.types',
            'title'         => trans('*.liro-menus.backend.types.delete'),
            'handler'       => 'Liro\Menus\Routers\TypeRouter@delete'
        ]

    ]

];