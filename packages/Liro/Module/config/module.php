<?php

return [

    'use' => Liro\Module\Module\Module::class,

    'paths' => [
        '/storage/web/*/module.php',
    ],

    'loaders' => [
        Liro\Module\Loaders\AutoloadLoader::class,
        Liro\Module\Loaders\MigrationLoader::class,
        Liro\Module\Loaders\EventLoader::class,
        Liro\Module\Loaders\MiddlewareLoader::class,
        Liro\Module\Loaders\ProviderLoader::class,
        Liro\Module\Loaders\ViewLoader::class,
        Liro\Module\Loaders\TranslationLoader::class,
        Liro\Module\Loaders\RouteLoader::class,
        Liro\Module\Loaders\AssetsLoader::class,
    ]

];
