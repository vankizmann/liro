<?php

return [

    'liro-languages.language.index' => [
        'liro-languages::module.language.index', 'Liro\Languages\Routers\LanguageRouter@index'
    ],

    'liro-languages.language.create' => [
        'liro-languages::module.language.create', 'Liro\Languages\Routers\LanguageRouter@create'
    ],

    'liro-languages.language.edit' => [
        'liro-languages::module.language.edit', 'Liro\Languages\Routers\LanguageRouter@edit'
    ]

];