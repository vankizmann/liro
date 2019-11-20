<?php

return [

    'providers' => [
        Liro\Support\SupportServiceProvider::class,
        Liro\Module\ModuleServiceProvider::class,
        Liro\Assets\AssetsServiceProvider::class,
        Liro\Auth\AuthServiceProvider::class,
        Liro\Menu\MenuServiceProvider::class,
        Liro\Media\MediaServiceProvider::class,
    ],

    'alias' => [
        'Web' => Liro\Support\Facades\Web::class,
        'Assets' => Liro\Support\Facades\Assets::class,
        'Menu' => Liro\Support\Facades\Menu::class,
        'Media' => Liro\Support\Facades\Media::class,
        'Module' => Liro\Support\Facades\Module::class,
    ],

];
