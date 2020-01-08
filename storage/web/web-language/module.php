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

        'WebLanguageLocale' => [
            'web-language::js/web-language.js'
        ],

        'WebTranslationIndex' => [
            'web-language::js/web-language.js'
        ],

        'WebTranslationEdit' => [
            'web-language::js/web-language.js'
        ],

    ],

    'routes' => [

        'ajax@web-language::language' => [
            Liro\Web\Language\Http\Controllers\LanguageController::class
        ],

        'ajax@web-language::locale' => [
            Liro\Web\Language\Http\Controllers\LocaleController::class
        ],

        'ajax@web-language::translation' => [
            Liro\Web\Language\Http\Controllers\TranslationController::class
        ],

    ],

];
