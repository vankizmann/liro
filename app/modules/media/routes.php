<?php

return [

    'routes' => [

        'liro-media.backend.media.index' => 'Liro\Media\Routers\MediaRouter@index',
        'liro-media.backend.media.trash' => 'Liro\Media\Routers\MediaRouter@trash'

    ],

    'groups' => [

        'liro-media.backend.media.group' => [
            'liro-media.backend.media.index'
        ]

    ],

    'options' => [

        'liro-media.backend.media.index' => function() {
            return 'TEST';
        }

    ]

];