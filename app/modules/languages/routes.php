<?php

return [

    'ajax@liro-languages.ajax.language.index' => [
        'liro-languages::api.language.index', 'Liro\Languages\Routers\Ajax\LanguageRouter@index'
    ],

    'ajax@liro-languages.ajax.language.show' => [
        'liro-languages::api.language.show', 'Liro\Languages\Routers\Ajax\LanguageRouter@show'
    ],

    'ajax@liro-languages.ajax.language.store' => [
        'liro-languages::api.language.create', 'Liro\Languages\Routers\Ajax\LanguageRouter@store'
    ],

    'ajax@liro-languages.ajax.language.update' => [
        'liro-languages::api.language.edit', 'Liro\Languages\Routers\Ajax\LanguageRouter@update'
    ],

    'admin@liro-languages.admin.language.index' => [
        'liro-languages::module.language.index', 'Liro\Languages\Routers\Admin\LanguageRouter@index'
    ],

    'admin@liro-languages.admin.language.create' => [
        'liro-languages::module.language.create', 'Liro\Languages\Routers\Admin\LanguageRouter@create'
    ],

    'admin@liro-languages.admin.language.edit' => [
        'liro-languages::module.language.edit', 'Liro\Languages\Routers\Admin\LanguageRouter@edit'
    ]

];