<?php

return [

    'name' => 'system.languages',

    'autoload' => [
        'Liro\\System\\Languages\\' => 'src/'
    ],

    'alias' => [
        'languages' => Liro\System\Languages\LanguageManager::class
    ],

    'loader' => [
        Liro\System\Languages\Loaders\TranslatorLoader::class
    ],

    'events' => [

        'boot' => function($app) {
            $app['languages']->register();
        }

    ]

];
