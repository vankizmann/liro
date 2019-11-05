<?php

return [

    'name'          => 'liro-languages',
    'version'       => '1.0.0',
    'type'          => 'extension',

    'autoload' => [
        'Liro\\Extension\\Languages\\' => 'src/'
    ],

    'providers' => [
        Liro\Extension\Languages\Providers\LanguageServiceProvider::class
    ]

];