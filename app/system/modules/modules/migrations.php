<?php

return [

    'install' => [
        'Liro\Extension\Modules\Migrations\ModuleTable@install',
        'Liro\Extension\Modules\Migrations\ModuleSeeder@install'
    ],

    'uninstall' => [
        'Liro\Extension\Modules\Migrations\ModuleTable@uninstall',
        'Liro\Extension\Modules\Migrations\ModuleSeeder@uninstall'
    ],

    '1.0.0' => [
        'Liro\Extension\Modules\Migrations\ModuleTable@update',
    ]

];
