<?php

return [

    'install' => [
        'Liro\Extension\Users\Migrations\PolicyTable@install',
        'Liro\Extension\Users\Migrations\RoleTable@install',
        'Liro\Extension\Users\Migrations\RoleToPolicyTable@install',
        'Liro\Extension\Users\Migrations\UserTable@install',
        'Liro\Extension\Users\Migrations\UserToRoleTable@install',
        'Liro\Extension\Users\Seeds\PolicySeeds@install',
        'Liro\Extension\Users\Seeds\RoleSeeds@install',
        'Liro\Extension\Users\Seeds\UserSeeds@install'
    ],

    'uninstall' => [
        'Liro\Extension\Users\Migrations\PolicyTable@uninstall',
        'Liro\Extension\Users\Migrations\RoleTable@uninstall',
        'Liro\Extension\Users\Migrations\RoleToPolicyTable@uninstall',
        'Liro\Extension\Users\Migrations\UserTable@uninstall',
        'Liro\Extension\Users\Migrations\UserToRoleTable@uninstall',
    ]

];
