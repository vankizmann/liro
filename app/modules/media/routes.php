<?php

return [

    'routes' => [

        'liro-media.backend.media.index' => [
            'label'         => 'liro-media.backend.media.index',
            'handler'       => 'Liro\Media\Routers\MediaRouter@index'
        ]

    ],

    'groups' => [

        'liro-media.backend.media.group' => [
            'liro-media.backend.media.index'
        ]

    ],

    'access' => [
        'liro-media.backend.media.index'
    ],

    'menus' => [

        'liro-media.backend.media.index' => function() {
            return 'TEST';
        }

    ]

];