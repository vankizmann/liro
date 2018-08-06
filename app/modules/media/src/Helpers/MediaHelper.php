<?php

namespace Liro\Media\Helpers;

use Liro\Media\Prototypes\Folder;

class MediaHelper
{

    public static function browser()
    {

        app('scripts')->routes([
            'media-move'        => route('liro-media.backend.media.move'),
            'media-upload'      => route('liro-media.backend.media.upload'),
            'media-create'      => route('liro-media.backend.media.create')
        ]);

        app('scripts')->data([
            'media' => Folder::make(),
        ]);

        app('scripts')->link('app-media', 'liro-media:resources/dist/app-media.js');
    }

}