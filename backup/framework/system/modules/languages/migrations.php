<?php

return [

    'install' => [
        'Liro\Extension\Languages\Migrations\LanguageTable@install',
        'Liro\Extension\Languages\Seeds\LanguageSeeds@install'
    ],

    'uninstall' => [
        'Liro\Extension\Languages\Migrations\LanguageTable@uninstall'
    ]

];
