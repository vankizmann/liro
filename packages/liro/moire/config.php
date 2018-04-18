<?php

return [

    'name'      => 'Moire',
    'version'   => '0.0.1',
    'alias'     => 'theme',

    'events' => [
        'factory.boot' => function($app) {
            $app['asset']->linkCss('moire.index', '/packages/liro/moire/resource/dist/css/theme.css', []);
            $app['asset']->linkJs('moire.index', '/packages/liro/moire/resource/dist/js/theme.js', ['cms.app']);
        }
    ]

];