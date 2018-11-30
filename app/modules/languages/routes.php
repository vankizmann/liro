<?php

return [

    'liro-languages.language.index' => [
        'liro-languages::module.language.index',
        'Liro\Languages\Routers\LanguageRouter@index'
    ],

    'liro-languages.language.create' => [
        'liro-languages::module.language.create',
        'Liro\Languages\Routers\LanguageRouter@create'
    ],

    'liro-languages.language.edit' => [
        'liro-languages::module.language.edit',
        'Liro\Languages\Routers\LanguageRouter@edit'
    ],

    '!liro-languages.language.api.index' => [
        'liro-languages::api.language.index',
        'Liro\Languages\Routers\LanguageApiRouter@index'
    ],

    '!liro-languages.language.api.show' => [
        'liro-languages::api.language.show',
        'Liro\Languages\Routers\LanguageApiRouter@show'
    ],

    '!liro-languages.language.api.store' => [
        'liro-languages::api.language.create',
        'Liro\Languages\Routers\LanguageApiRouter@store'
    ],

    '!liro-languages.language.api.update' => [
        'liro-languages::api.language.edit',
        'Liro\Languages\Routers\LanguageApiRouter@update'
    ]

];