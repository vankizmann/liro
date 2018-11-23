<?php

return [

    'install' => [
        'Liro\System\Modules\Tables\ModuleTable@install',
        'Liro\System\Modules\Seeder@install'
    ],

    'uninstall' => [
        'Liro\System\Modules\Tables\ModuleTable@uninstall'
    ]

];
