<?php

return [

    'paths' => [
        '/app/system/modules/*/index.php',
        '/app/system/themes/*/index.php',
        '/modules/*/*/index.php',
        '/themes/*/*/index.php'
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
        Liro\System\Cms\Module\Loaders\ExportLoader::class,
    ],

    'assets' => [
        'script' => Liro\System\Cms\Asset\ScriptAsset::class,
        'style' => Liro\System\Cms\Asset\StyleAsset::class,
        'locale' => Liro\System\Cms\Asset\LocaleAsset::class,
        'route' => Liro\System\Cms\Asset\RouteAsset::class,
        'store' => Liro\System\Cms\Asset\StoreAsset::class,
        'export' => Liro\System\Cms\Asset\ExportAsset::class
    ]

];
