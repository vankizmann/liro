<?php

return [

    'name'          => 'web-page',
    'version'       => '1.0.0',
    'type'          => 'package',

    'routes' => [

        'ajax@web-page::page' => [
            Liro\Web\Page\Http\Controllers\PageController::class
        ],

        'http@web-page::page' => [
            Liro\Web\Page\Http\Connectors\PageConnector::class
        ],

    ],

    'autoload' => [
        'Liro\\Web\\Page\\' => 'src/'
    ],


];
