<?php

return [

    'ajax@liro-languages.ajax.language.index' => [
        'liro-languages::ajax.language.index', 'Liro\Languages\Routers\Ajax\LanguageRouter@index'
    ],

    'ajax@liro-languages.ajax.language.show' => [
        'liro-languages::ajax.language.show', 'Liro\Languages\Routers\Ajax\LanguageRouter@show'
    ],

    'ajax@liro-languages.ajax.language.store' => [
        'liro-languages::ajax.language.store', 'Liro\Languages\Routers\Ajax\LanguageRouter@store'
    ],

    'ajax@liro-languages.ajax.language.update' => [
        'liro-languages::ajax.language.update', 'Liro\Languages\Routers\Ajax\LanguageRouter@update'
    ],

    'admin@liro-languages.admin.language.index' => [
        'liro-languages::admin.language.index', 'Liro\Languages\Routers\Admin\LanguageRouter@index'
    ],

    'admin@liro-languages.admin.language.create' => [
        'liro-languages::admin.language.create', 'Liro\Languages\Routers\Admin\LanguageRouter@create'
    ],

    'admin@liro-languages.admin.language.edit' => [
        'liro-languages::admin.language.edit', 'Liro\Languages\Routers\Admin\LanguageRouter@edit'
    ]

];