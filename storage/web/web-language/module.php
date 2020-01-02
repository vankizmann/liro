<?php

return [

    'name'          => 'web-language',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\Language\\' => 'src/'
    ],

    'imports' => [

        'WebLanguageIndex' => [
            'web-language::js/web-language.js'
        ],

        'WebLanguageEdit' => [
            'web-language::js/web-language.js'
        ],

        'WebLanguageShow' => [
            'web-language::js/web-language.js'
        ]

    ],

    'routes' => [

        'ajax@web-language::language' => [
            Liro\Web\Language\Http\Controllers\LanguageController::class
        ],

    ],

];