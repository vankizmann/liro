<?php

return [

    'name' => 'system.assets',

    'autoload' => [
        'Liro\\System\\Assets\\' => 'src/'
    ],

    'alias' => [
        'scripts' => Liro\System\Assets\ScriptManager::class,
        'styles' => Liro\System\Assets\StyleManager::class
    ],

    'loader' => [
        Liro\System\Assets\Loaders\AssetLoader::class
    ]

];
