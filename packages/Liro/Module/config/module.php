<?php

return [

    'paths' => [
        '/public/packages/*/*/module.php',
    ],

    'loaders' => [
        Liro\Module\Loaders\AutoloadLoader::class,
        Liro\Module\Loaders\MigrationLoader::class,
        Liro\Module\Loaders\EventLoader::class,
        Liro\Module\Loaders\MiddlewareLoader::class,
        Liro\Module\Loaders\ProviderLoader::class,
//        Liro\Module\Loaders\ViewLoader::class,
//        Liro\Module\Loaders\TranslationLoader::class,
//        Liro\Module\Loaders\AssetsLoader::class,
//        Liro\Module\Loaders\MenuLoader::class,
    ],

    'modules' => [
        'web-dashboard'
//        'liro/fields' => Liro\Fields\FieldsModule::class,
//        'liro/fields' => Liro\Fields\FieldsModule::class,
//        'liro/fields' => Liro\Fields\FieldsModule::class,
    ],

];
