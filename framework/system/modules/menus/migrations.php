<?php

return [

    'install' => [
        'Liro\Extension\Menus\Migrations\DomainTable@install',
        'Liro\Extension\Menus\Migrations\MenuTable@install',
        'Liro\Extension\Menus\Seeds\DomainSeeds@install',
        'Liro\Extension\Menus\Seeds\MenuSeeds@install'
    ],

    'uninstall' => [
        'Liro\Extension\Menus\Migrations\DomainTable@uninstall',
        'Liro\Extension\Menus\Migrations\MenuTable@uninstall'
    ]

];
