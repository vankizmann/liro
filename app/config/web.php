<?php

return [

    'paths' => [
        '/app/system/modules/*/index.php',
        '/app/modules/*/index.php',
        '/modules/*/*/index.php'
    ],

    'autoload' => [
        'liro-fields',
        'liro-modules',
        'liro-languages',
        'liro-users',
        'liro-menus',
    ],

    'filters' => [
        Liro\System\Cms\Module\Loaders\AutoloadLoader::class,
        Liro\System\Cms\Module\Loaders\ProviderLoader::class,
        Liro\System\Cms\Module\Loaders\MigrationLoader::class,
        Liro\System\Cms\Module\Loaders\RouteLoader::class,
        Liro\System\Cms\Module\Loaders\ViewLoader::class,
        Liro\System\Cms\Module\Loaders\TranslationLoader::class,
        Liro\System\Cms\Module\Loaders\AssetLoader::class,
        Liro\System\Cms\Module\Loaders\EventLoader::class,
        Liro\System\Cms\Module\Loaders\MiddlewareLoader::class,
    ],

    'assets' => [
        'script' => Liro\System\Cms\Asset\ScriptAsset::class,
        'style' => Liro\System\Cms\Asset\StyleAsset::class,
//        'route' => Liro\System\Cms\Asset\RouteAsset::class
    ]

];
