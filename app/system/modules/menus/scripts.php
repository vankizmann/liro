<?php

return [

    'install' => [
        'Liro\System\Menus\Tables\DomainTable@install',
        'Liro\System\Menus\Tables\MenuTable@install',
        'Liro\System\Menus\Seeder@install'
    ],

    'uninstall' => [
        'Liro\System\Menus\Tables\DomainTable@uninstall',
        'Liro\System\Menus\Tables\MenuTable@uninstall'
    ]

];
