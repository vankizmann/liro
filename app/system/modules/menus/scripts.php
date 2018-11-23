<?php

return [

    'install' => [
        'Liro\System\Menus\Tables\MenuTypeTable@install',
        'Liro\System\Menus\Tables\MenuTable@install',
        'Liro\System\Menus\Seeder@install'
    ],

    'uninstall' => [
        'Liro\System\Menus\Tables\MenuTypeTable@uninstall',
        'Liro\System\Menus\Tables\MenuTable@uninstall'
    ]

];
