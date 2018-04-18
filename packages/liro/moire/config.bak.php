<?php

return [

    'name'      => 'Moiré',
    'version'   => '0.0.1',
    'type'      => 'cms.package.backend.theme',

    'register' => function($app) {
        $app['asset']->linkCss('moire.index', '/packages/liro/moire/resource/dist/css/theme.css', []);
        $app['asset']->linkJs('moire.index', '/packages/liro/moire/resource/dist/js/theme.js', ['cms.app']);
    }

];