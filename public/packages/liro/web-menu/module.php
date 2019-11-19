<?php

return [

    'name'          => 'liro/web-menu',
    'version'       => '1.0.0',
    'type'          => 'package',

    'menus' => [

        'global@web-menu::http.domain.index' => [
            'Liro\Web\Menu\Router\Http@domain'
        ],

        'global@web-menu::http.menu.index' => [
            'Liro\Web\Menu\Router\Http@menu'
        ],

        'global@web-menu::http.redirect.index' => [
            'Liro\Web\Menu\Router\Http@redirect'
        ],

    ],

    'autoload' => [
        'Liro\\Web\\Menu\\' => 'src/'
    ],

];
