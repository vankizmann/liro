<?php

return [

    'paths' => [
        '/modules/*/*/index.php', '/themes/*/*/index.php'
    ],

    'loaders' => [
        Liro\Support\Loaders\AutoloadLoader::class,
        Liro\Support\Loaders\MigrationLoader::class,
        Liro\Support\Loaders\ViewLoader::class,
        Liro\Support\Loaders\TranslationLoader::class,
        Liro\Support\Loaders\EventLoader::class,
        Liro\Support\Loaders\MiddlewareLoader::class,
        Liro\Support\Loaders\AssetsLoader::class,
        Liro\Support\Loaders\MenuLoader::class,
    ],

    'modules' => [
        'liro/fields' => Liro\Fields\FieldsModule::class,
        'liro/fields' => Liro\Fields\FieldsModule::class,
        'liro/fields' => Liro\Fields\FieldsModule::class,
    ],

];
