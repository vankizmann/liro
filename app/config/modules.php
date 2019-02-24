<?php

return [

    /**
     * Paths to find modules
     */
    'paths' => [
        '/app/system/modules/*/index.php',
        '/app/modules/*/index.php',
        '/modules/*/*/index.php'
    ],

    'defaults' => [
        'liro-policies', 'liro-users', 'liro-modules',
    ],

    /**
     * Filters on module
     */
    'filters' => [
        Liro\System\Cms\Module\Loaders\AutoloadLoader::class,
        Liro\System\Cms\Module\Loaders\ProviderLoader::class,
        Liro\System\Cms\Module\Loaders\MigrationLoader::class,
        Liro\System\Cms\Module\Loaders\RouteLoader::class,
        Liro\System\Cms\Module\Loaders\EventLoader::class,
        Liro\System\Cms\Module\Loaders\MiddlewareLoader::class,
    ]

];
