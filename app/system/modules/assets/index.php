<?php

return [

    'name'          => 'system-assets',
    'version'       => '0.0.1',
    'type'          => 'system-module',

    'autoload' => [
        'Liro\\System\\Assets\\' => 'src/'
    ],

    'alias' => [
        'scripts'       => Liro\System\Assets\Managers\ScriptManager::class,
        'styles'        => Liro\System\Assets\Managers\StyleManager::class,
        'assets'        => Liro\System\Assets\Managers\AssetManager::class
    ]

];
