<?php

return [

    'paths' => [
        '/modules/*/*/index.php',
        '/themes/*/*/index.php'
    ],

    'providers' => [
        Liro\Assets\AssetsServiceProvider::class,
        Liro\Menu\MenuServiceProvider::class,
        Liro\User\UserServiceProvider::class,
        Liro\Module\ModuleServiceProvider::class,
    ],

    'alias' => [
        'Web' => Liro\Support\Facades\Web::class,
        'Assets' => Liro\Support\Facades\Assets::class,
        'Menu' => Liro\Support\Facades\Menu::class,
        'User' => Liro\Support\Facades\User::class,
        'Module' => Liro\Support\Facades\Module::class,
    ],

    'modules' => [
        'login' => 'liro-users.admin.auth.login',
        'logout' => 'liro-users.admin.auth.logout'
    ],

    'autoload' => [
        'liro/ui-fields',
        'liro/ui-modules',
        'liro-languages',
        'liro-users',
        'liro-menus',
        'liro-pages',
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
        'menu' => Liro\System\Cms\Asset\MenuAsset::class,
        'locale' => Liro\System\Cms\Asset\LocaleAsset::class,
        'route' => Liro\System\Cms\Asset\RouteAsset::class,
        'data' => Liro\System\Cms\Asset\DataAsset::class,
        'export' => Liro\System\Cms\Asset\ExportAsset::class,
    ]

];
