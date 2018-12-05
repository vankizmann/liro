<?php

return [

    'admin@liro-languages.language.index' => [
        'liro-languages::module.language.index',
        'Liro\Languages\Routers\LanguageRouter@index'
    ],

    'admin@liro-languages.language.create' => [
        'liro-languages::module.language.create',
        'Liro\Languages\Routers\LanguageRouter@create'
    ],

    'admin@liro-languages.language.edit' => [
        'liro-languages::module.language.edit',
        'Liro\Languages\Routers\LanguageRouter@edit'
    ],

    'ajax@liro-languages.language.api.index' => [
        'liro-languages::api.language.index',
        'Liro\Languages\Routers\LanguageApiRouter@index'
    ],

    'ajax@liro-languages.language.api.show' => [
        'liro-languages::api.language.show',
        'Liro\Languages\Routers\LanguageApiRouter@show'
    ],

    'ajax@liro-languages.language.api.store' => [
        'liro-languages::api.language.create',
        'Liro\Languages\Routers\LanguageApiRouter@store'
    ],

    'ajax@liro-languages.language.api.update' => [
        'liro-languages::api.language.edit',
        'Liro\Languages\Routers\LanguageApiRouter@update'
    ]

];