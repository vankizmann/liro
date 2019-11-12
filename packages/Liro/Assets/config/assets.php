<?php

return [

    'loaders' => [
        'script' => Liro\Asset\Loaders\ScriptLoader::class,
        'style' => Liro\Asset\Loaders\StyleLoader::class,
        'menu' => Liro\Asset\Loaders\MenuLoader::class,
        'locale' => Liro\Asset\Loaders\LocaleLoader::class,
        'route' => Liro\Asset\Loaders\RouteLoader::class,
        'data' => Liro\Asset\Loaders\DataLoader::class,
        'export' => Liro\Asset\Loaders\ExportLoader::class,
    ]

];
