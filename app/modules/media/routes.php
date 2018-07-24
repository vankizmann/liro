<?php

return [

    'groups' => [

        'liro-media.backend.media' => [
            'title' => 'liro-media.backend.media.group'
        ]

    ],

    'routes' => [

        'liro-media.backend.media.index' => [
            'hidden'        => true,
            'group'         => 'liro-media.backend.media',
            'title'         => 'liro-media.backend.media.index',
            'handler'       => 'Liro\Media\Routers\MediaRouter@index'
        ],

        'liro-media.backend.media.move' => [
            'hidden'        => true,
            'group'         => 'liro-media.backend.media',
            'title'         => 'liro-media.backend.media.move',
            'handler'       => 'Liro\Media\Routers\MediaRouter@move'
        ],

        'liro-media.backend.media.delete' => [
            'hidden'        => true,
            'group'         => 'liro-media.backend.media',
            'title'         => 'liro-media.backend.media.delete',
            'handler'       => 'Liro\Media\Routers\MediaRouter@delete'
        ],

        'liro-media.backend.media.upload' => [
            'hidden'        => true,
            'group'         => 'liro-media.backend.media',
            'title'         => 'liro-media.backend.media.upload',
            'handler'       => 'Liro\Media\Routers\MediaRouter@upload'
        ],

        'liro-media.backend.media.create' => [
            'hidden'        => true,
            'group'         => 'liro-media.backend.media',
            'title'         => 'liro-media.backend.media.create',
            'handler'       => 'Liro\Media\Routers\MediaRouter@create'
        ]

    ]

];