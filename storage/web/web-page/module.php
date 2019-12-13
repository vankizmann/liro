<?php

return [

    'name'          => 'web-page',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\Page\\' => 'src/'
    ],

    'imports' => [

        'WebPageIndex' => [
            'web-page::js/web-page.js',
            'web-page::css/web-page.css'
        ],

        'WebPageEdit' => [
            'web-page::js/web-page.js',
            'web-page::css/web-page.css'
        ],

        'WebPageShow' => [
            'web-page::js/web-page.js',
            'web-page::css/web-page.css'
        ]

    ],

    'routes' => [

        'ajax@web-page::page' => [
            Liro\Web\Page\Http\Controllers\PageController::class
        ],

        'http@web-page::page' => [
            Liro\Web\Page\Http\Connectors\PageConnector::class
        ],

    ],

];
