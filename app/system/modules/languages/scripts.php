<?php

return [

    'install' => [
        'Liro\System\Languages\Tables\LanguageTable@install',
        'Liro\System\Languages\Seeder@install'
    ],

    'uninstall' => [
        'Liro\System\Languages\Tables\LanguageTable@uninstall'
    ]

];
