<?php

return [

    'install' => [
        'Liro\System\Users\Tables\UserRoleLinkTable@install',
        'Liro\System\Users\Tables\UserRoleRouteTable@install',
        'Liro\System\Users\Tables\UserRoleTable@install',
        'Liro\System\Users\Tables\UserTable@install',
        'Liro\System\Users\Seeder@install'
    ],

    'uninstall' => [
        'Liro\System\Users\Tables\UserRoleLinkTable@uninstall',
        'Liro\System\Users\Tables\UserRoleRouteTable@uninstall',
        'Liro\System\Users\Tables\UserRoleTable@uninstall',
        'Liro\System\Users\Tables\UserTable@uninstall'
    ]

];
