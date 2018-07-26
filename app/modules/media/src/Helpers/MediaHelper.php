<?php

namespace Liro\Media\Helpers;

use Liro\Media\Prototypes\Folder;

class MediaHelper
{

    public static function browser()
    {
        app('scripts')->data([
            'media' => Folder::make()
        ]);

        app('scripts')->link('app-media', 'liro-media:resources/dist/app-media.js');

        return '<app-media-browser move-route="' . route('liro-media.backend.media.move') . '" upload-route="' . route('liro-media.backend.media.upload') . '" create-route="' . route('liro-media.backend.media.create') . '"></app-media-browser>';
    }

}