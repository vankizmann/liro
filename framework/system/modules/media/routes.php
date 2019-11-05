<?php

return [

    'ajax@liro-media.ajax.folder.index' => [
        'liro-media::ajax.folder.index', 'Liro\Media\Routers\Ajax\FolderRouter@index'
    ],

    'ajax@liro-media.ajax.folder.create' => [
        'liro-media::ajax.folder.create', 'Liro\Media\Routers\Ajax\FolderRouter@create'
    ],

    'ajax@liro-media.ajax.folder.rename' => [
        'liro-media::ajax.folder.rename', 'Liro\Media\Routers\Ajax\FolderRouter@rename'
    ],

    'ajax@liro-media.ajax.folder.move' => [
        'liro-media::ajax.folder.move', 'Liro\Media\Routers\Ajax\FolderRouter@move'
    ],

    'ajax@liro-media.ajax.folder.delete' => [
        'liro-media::ajax.folder.delete', 'Liro\Media\Routers\Ajax\FolderRouter@delete'
    ],

    'admin@liro-media.admin.folder.index' => [
        'liro-media::admin.folder.index', 'Liro\Media\Routers\Admin\FolderRouter@index'
    ],

    'ajax@liro-media.ajax.file.move' => [
        'liro-media::ajax.file.move', 'Liro\Media\Routers\Ajax\FileRouter@move'
    ],

    'ajax@liro-media.ajax.file.rename' => [
        'liro-media::ajax.file.rename', 'Liro\Media\Routers\Ajax\FileRouter@rename'
    ],

    'ajax@liro-media.ajax.file.delete' => [
        'liro-media::ajax.file.delete', 'Liro\Media\Routers\Ajax\FileRouter@delete'
    ],

    'ajax@liro-media.ajax.file.upload' => [
        'liro-media::ajax.file.upload', 'Liro\Media\Routers\Ajax\FileRouter@upload'
    ],

];